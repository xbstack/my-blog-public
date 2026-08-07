# Version matrix

| n8n app | Channel | n8n-workflow | n8n-nodes-base | Baserow nested filter children | Result |
|---|---|---|---|---|---|
| 2.32.7 | previous stable | 2.32.1 | 2.32.4 | `field`, `operator`, `value` | OK |
| 2.33.4 | stable at report time | 2.33.1 | 2.33.1 | `field`, `operator`, `timezone`, `value` | `Max iterations reached` |
| 2.33.5 | current stable on 2026-08-07 | 2.33.1 | 2.33.1 | same package set as 2.33.4 | same deterministic repro applies |
| 2.34.2 | pre-release on 2026-08-07 | 2.34.1 | 2.34.1 | `field`, `operator`, `timezone`, `value` | `Max iterations reached` |
| 2.33.x package set + local diagnostic patch | diagnostic only | 2.33.1 | 2.33.1 | `timezone.displayOptions.show.operator` | OK |

## Observed regression

The affected Baserow dependency sets include a `timezone` field under the nested filter collection with:

```js
displayOptions: {
  show: {
    '../operator': [
      'date_is',
      'date_is_not',
      'date_is_before',
      'date_is_on_or_before',
      'date_is_after',
      'date_is_on_or_after',
      'date_is_within',
      'date_within_days',
      'date_within_weeks',
      'date_within_months',
      'date_equals_days_ago',
      'date_equals_months_ago',
      'date_equals_years_ago',
      'date_equals_today',
      'date_before_today',
      'date_after_today',
      'date_equals_week',
      'date_equals_month',
      'date_equals_year'
    ]
  }
}
```

At this nested level `operator` is a sibling parameter. In the minimal test, changing the dependency key from `../operator` to `operator` allows `getNodeParameters()` to resolve the same parameter list successfully.

This patch is evidence for the dependency-resolution root cause. It is not an upstream-approved production patch.

## Release-state note

As checked on 2026-08-07, n8n GitHub Releases lists 2.33.5 as stable and 2.34.2 as a pre-release. Their published release notes do not list this Baserow regression as fixed. The resolver matrix above is stronger evidence than release-note absence: 2.34.2's declared core package set was installed and still reproduces the exact error.
