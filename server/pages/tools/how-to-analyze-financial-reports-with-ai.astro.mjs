import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, y as Fragment } from '../../chunks/astro/server_CuadZCs7.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Lb3doMJi.mjs';
import { $ as $$TechLayout } from '../../chunks/TechLayout_DKxilxSU.mjs';
export { renderers } from '../../renderers.mjs';

const $$HowToAnalyzeFinancialReportsWithAi = createComponent(($$result, $$props, $$slots) => {
  const title = "\u6211\u505A\u4E86\u4E00\u4E2A AI \u8D22\u62A5\u52A9\u624B\uFF1A\u5982\u4F55\u7528 AI \u5FEB\u901F\u62C6\u89E3\u8D22\u62A5\u3001\u98CE\u9669\u548C\u7BA1\u7406\u5C42\u8868\u8FF0\uFF1F";
  const seoTitle = "AI \u8D22\u62A5\u52A9\u624B\u662F\u4EC0\u4E48\uFF1F\u5982\u4F55\u7528 AI \u5FEB\u901F\u62C6\u89E3\u8D22\u62A5\u3001\u98CE\u9669\u56E0\u7D20\u548C\u7BA1\u7406\u5C42\u8868\u8FF0 - XBSTACK";
  const description = "AI \u8D22\u62A5\u52A9\u624B\u53EF\u4EE5\u5206\u6790\u5E74\u62A5\u3001\u5B63\u62A5\u300110-K\u3001\u7535\u8BDD\u4F1A\u7EAA\u8981\u548C\u8D22\u52A1\u6458\u8981\uFF0C\u63D0\u53D6\u6838\u5FC3 KPI\u3001\u73B0\u91D1\u6D41\u3001\u98CE\u9669\u56E0\u7D20\u3001\u7BA1\u7406\u5C42\u8868\u8FF0\u548C\u6295\u7814\u68C0\u67E5\u6E05\u5355\u3002\u672C\u6587\u8BF4\u660E\u5B83\u80FD\u505A\u4EC0\u4E48\u3001\u4E0D\u80FD\u505A\u4EC0\u4E48\uFF0C\u4EE5\u53CA\u5982\u4F55\u4F5C\u4E3A\u8D22\u62A5\u9605\u8BFB\u524D\u7F6E\u5DE5\u5177\u4F7F\u7528\u3002";
  const canonical = "https://www.xbstack.com/tools/how-to-analyze-financial-reports-with-ai/";
  const keywords = [
    "AI \u8D22\u62A5\u5206\u6790",
    "AI Financial Report Analyzer",
    "AI \u8D22\u62A5\u52A9\u624B",
    "\u8D22\u62A5 PDF \u5206\u6790",
    "AI \u6295\u7814\u5DE5\u5177",
    "10-K \u5206\u6790",
    "\u8D22\u62A5\u7535\u8BDD\u4F1A\u7EAA\u8981",
    "\u98CE\u9669\u56E0\u7D20\u5206\u6790",
    "\u7BA1\u7406\u5C42\u8BED\u6C14\u5206\u6790",
    "\u6295\u8D44\u68C0\u67E5\u6E05\u5355"
  ].join(", ");
  const faqs = [
    {
      question: "AI \u8D22\u62A5\u52A9\u624B\u53EF\u4EE5\u66FF\u4EE3\u4EBA\u5DE5\u8BFB\u8D22\u62A5\u5417\uFF1F",
      answer: "\u4E0D\u80FD\u3002AI \u8D22\u62A5\u52A9\u624B\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u63D0\u53D6\u8D22\u62A5\u4E2D\u7684\u5173\u952E\u6307\u6807\u3001\u98CE\u9669\u56E0\u7D20\u548C\u7BA1\u7406\u5C42\u8868\u8FF0\uFF0C\u4F46\u4E0D\u80FD\u66FF\u4EE3\u4EBA\u5DE5\u5224\u65AD\u3002\u91CD\u8981\u6570\u5B57\u3001\u98CE\u9669\u62AB\u9732\u548C\u7BA1\u7406\u5C42\u627F\u8BFA\u4ECD\u7136\u9700\u8981\u56DE\u5230\u539F\u59CB\u8D22\u62A5\u4E2D\u590D\u6838\u3002"
    },
    {
      question: "AI \u8D22\u62A5\u52A9\u624B\u80FD\u9884\u6D4B\u80A1\u4EF7\u5417\uFF1F",
      answer: "\u4E0D\u80FD\u3002AI \u8D22\u62A5\u52A9\u624B\u4E0D\u9884\u6D4B\u80A1\u4EF7\uFF0C\u4E5F\u4E0D\u63D0\u4F9B\u4E70\u5356\u5EFA\u8BAE\u3002\u5B83\u66F4\u9002\u5408\u505A\u4FE1\u606F\u538B\u7F29\u3001\u98CE\u9669\u63D0\u53D6\u548C\u6295\u7814\u68C0\u67E5\u6E05\u5355\u751F\u6210\u3002"
    },
    {
      question: "AI \u5206\u6790\u8D22\u62A5\u6700\u9002\u5408\u505A\u4EC0\u4E48\uFF1F",
      answer: "AI \u6700\u9002\u5408\u505A\u4E09\u7C7B\u5DE5\u4F5C\uFF1A\u63D0\u53D6\u6536\u5165\u3001\u5229\u6DA6\u3001\u73B0\u91D1\u6D41\u3001\u8D1F\u503A\u7B49\u6838\u5FC3\u6307\u6807\uFF1B\u6574\u7406\u98CE\u9669\u56E0\u7D20\u548C\u7BA1\u7406\u5C42\u8868\u8FF0\uFF1B\u628A\u8D22\u62A5\u5185\u5BB9\u8F6C\u5316\u6210\u540E\u7EED\u9700\u8981\u4EBA\u5DE5\u9A8C\u8BC1\u7684\u95EE\u9898\u6E05\u5355\u3002"
    },
    {
      question: "AI \u5206\u6790\u8D22\u62A5\u6700\u5927\u7684\u98CE\u9669\u662F\u4EC0\u4E48\uFF1F",
      answer: "\u6700\u5927\u7684\u98CE\u9669\u662F\u6A21\u578B\u53EF\u80FD\u8BEF\u8BFB\u8868\u683C\u3001\u9057\u6F0F\u811A\u6CE8\u3001\u6DF7\u6DC6\u4F1A\u8BA1\u53E3\u5F84\uFF0C\u6216\u8005\u628A\u7BA1\u7406\u5C42\u8868\u8FF0\u603B\u7ED3\u5F97\u8FC7\u4E8E\u7B80\u5316\u3002\u56E0\u6B64 AI \u8F93\u51FA\u53EA\u80FD\u4F5C\u4E3A\u521D\u7B5B\u7ED3\u679C\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u6700\u7EC8\u6295\u8D44\u4F9D\u636E\u3002"
    },
    {
      question: "\u4EC0\u4E48\u4EBA\u9002\u5408\u4F7F\u7528 AI \u8D22\u62A5\u52A9\u624B\uFF1F",
      answer: "\u9002\u5408\u9700\u8981\u5FEB\u901F\u9605\u8BFB\u5927\u91CF\u8D22\u62A5\u7684\u4EBA\uFF0C\u5305\u62EC\u4E2A\u4EBA\u6295\u8D44\u8005\u3001\u72EC\u7ACB\u7814\u7A76\u8005\u3001\u5185\u5BB9\u521B\u4F5C\u8005\u3001\u4EA7\u54C1\u7ECF\u7406\u3001AI \u5DE5\u5177\u5F00\u53D1\u8005\uFF0C\u4EE5\u53CA\u60F3\u628A\u8D22\u62A5\u9605\u8BFB\u6D41\u7A0B\u81EA\u52A8\u5316\u7684\u4EBA\u3002"
    },
    {
      question: "AI \u8D22\u62A5\u52A9\u624B\u548C\u4F20\u7EDF\u8D22\u52A1\u5206\u6790\u5DE5\u5177\u6709\u4EC0\u4E48\u533A\u522B\uFF1F",
      answer: "\u4F20\u7EDF\u8D22\u52A1\u5206\u6790\u5DE5\u5177\u66F4\u64C5\u957F\u7ED3\u6784\u5316\u6570\u636E\u3001\u4F30\u503C\u6A21\u578B\u548C\u6307\u6807\u5BF9\u6BD4\uFF1BAI \u8D22\u62A5\u52A9\u624B\u66F4\u64C5\u957F\u5904\u7406\u975E\u7ED3\u6784\u5316\u6587\u672C\uFF0C\u4F8B\u5982\u98CE\u9669\u56E0\u7D20\u3001\u7BA1\u7406\u5C42\u8BA8\u8BBA\u3001\u7535\u8BDD\u4F1A\u95EE\u7B54\u548C\u516C\u544A\u8BF4\u660E\u3002\u4E24\u8005\u4E0D\u662F\u66FF\u4EE3\u5173\u7CFB\uFF0C\u66F4\u9002\u5408\u7ED3\u5408\u4F7F\u7528\u3002"
    }
  ];
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": title,
        "description": "AI \u8D22\u62A5\u52A9\u624B\u662F\u4E00\u79CD\u7528\u5927\u8BED\u8A00\u6A21\u578B\u5206\u6790\u5E74\u62A5\u3001\u5B63\u62A5\u300110-K\u3001\u7535\u8BDD\u4F1A\u7EAA\u8981\u548C\u8D22\u52A1\u6458\u8981\u7684\u5DE5\u5177\uFF0C\u53EF\u4EE5\u63D0\u53D6\u6536\u5165\u3001\u5229\u6DA6\u3001\u73B0\u91D1\u6D41\u3001\u98CE\u9669\u56E0\u7D20\u3001\u7BA1\u7406\u5C42\u8868\u8FF0\u548C\u6295\u7814\u68C0\u67E5\u6E05\u5355\u3002",
        "mainEntityOfPage": canonical,
        "author": {
          "@type": "Person",
          "name": "\u5C0F\u767D",
          "url": "https://www.xbstack.com/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "XBSTACK"
        },
        "keywords": keywords.split(", "),
        "about": [
          "AI financial report analysis",
          "financial statement analysis",
          "AI investing tools",
          "risk factor extraction",
          "management discussion analysis"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };
  const articleEntry = {
    id: "tools/how-to-analyze-financial-reports-with-ai",
    collection: "tools",
    data: {
      title,
      description,
      lang: "zh-CN",
      category: "AI Finance",
      tags: ["AI \u8D22\u62A5\u5206\u6790", "AI Finance", "\u8D22\u62A5", "\u6295\u7814\u5DE5\u5177"],
      tldr: [
        "AI \u6700\u9002\u5408\u5148\u505A\u4FE1\u606F\u538B\u7F29\u3001\u98CE\u9669\u63D0\u53D6\u548C\u95EE\u9898\u6E05\u5355\uFF0C\u4E0D\u9002\u5408\u76F4\u63A5\u66FF\u4EBA\u505A\u6295\u8D44\u5224\u65AD\u3002",
        "\u5173\u952E\u6570\u5B57\u3001\u8868\u683C\u3001\u811A\u6CE8\u548C\u7BA1\u7406\u5C42\u8868\u8FF0\u90FD\u5FC5\u987B\u56DE\u5230\u539F\u59CB\u8D22\u62A5\u590D\u6838\u3002",
        "\u5DE5\u5177\u9875\u8D1F\u8D23\u76F4\u63A5\u4F7F\u7528\uFF0C\u8FD9\u7BC7\u6587\u7AE0\u8D1F\u8D23\u89E3\u91CA\u600E\u4E48\u7528\u3001\u7528\u5728\u54EA\u4EE5\u53CA\u8FB9\u754C\u5728\u54EA\u91CC\u3002"
      ]
    },
    body: ""
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": seoTitle, "description": description, "canonical": canonical, "keywords": keywords, "ogType": "article", "schemaJsonLd": schemaJsonLd }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TechLayout", $$TechLayout, { "entry": articleEntry, "headings": [], "recommendedPosts": [], "categoryLink": "/tools/ai-finance/", "showReadingTime": false }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p>很多人第一次看财报，会下意识从第一页看到最后一页。</p> <p>我以前也这样。打开一份年报，先看收入，再看利润，再看现金流，看到“风险因素”时已经有点困了，看到管理层讨论和附注时，脑子里只剩一个问题：这家公司到底是变好了，还是只是说得更好听了？</p> <p>后来我发现，财报阅读真正难的不是专业术语，而是信息密度太高。</p> <p>一份年报可能有上百页。里面既有有用的数字，也有模板化表达；既有业务变化，也有会计口径变化；既有公司想强调的亮点，也有它不得不披露的风险。</p> <p>普通投资者、独立研究者或者内容创作者，最容易犯的错误不是少看一行字，而是看完之后没有形成判断结构。</p> <p>所以我做了一个小工具：<strong>AI 财报助手</strong>。</p> <p>它不是荐股工具，也不负责告诉你买还是卖。它只解决一个更基础的问题：当你丢进去一份财报、财务摘要或电话会纪要时，它能不能帮你快速拆出几个关键问题。</p> <p>我希望它做的不是“替我判断”，而是“帮我把材料摊开”。</p> <h2>AI 财报助手是什么？</h2> <p>AI 财报助手是一种用大语言模型处理财报、年报、季报、10-K、10-Q、电话会纪要和财务摘要的工具。</p> <p>它的核心作用不是预测股价，也不是给出买卖建议，而是把财报里的收入、利润、现金流、负债、风险因素和管理层表述提取出来，整理成一份可以复查的投研检查清单。</p> <p>简单说，它解决三个问题：</p> <ol> <li><strong>信息压缩</strong>：把几十页甚至上百页财报压缩成关键指标和核心变化。</li> <li><strong>风险提取</strong>：从风险因素、管理层讨论和电话会问答中找出值得继续追问的地方。</li> <li><strong>判断辅助</strong>：生成一组问题清单，帮助人回到原文验证，而不是让 AI 直接替人做投资决策。</li> </ol> <p>所以，AI 财报助手更适合被看作“财报阅读前置工具”，而不是“荐股工具”。</p> <h2>财报里真正要看的不是所有文字</h2> <p>如果把财报当成一本书从头读到尾，很容易陷进去。</p> <p>但如果站在决策角度看，一份财报通常先回答几个问题。</p> <p>第一，公司的收入有没有增长？增长来自价格、销量、汇率、并购，还是一次性因素？</p> <p>第二，利润有没有跟着收入增长？毛利率、营业利润率、净利率有没有明显变化？</p> <p>第三，现金流是不是跟利润匹配？账面利润很好看，但经营现金流很差，这种情况要格外小心。</p> <p>第四，负债有没有变重？短期债务、长期债务、利息费用、偿债压力有没有变化？</p> <p>第五，管理层的语气有没有变化？上一季度说“需求强劲”，这一季度变成“市场环境充满挑战”，这种变化比单个数字更值得留意。</p> <p>第六，风险因素有没有新增？比如客户集中、监管压力、供应链、汇率、诉讼、库存、商誉减值。</p> <p>这些问题看起来简单，但在真实财报里很分散。收入在一处，现金流在另一处，风险因素又在很后面。电话会里管理层的表达，可能还藏在一段很长的问答里。</p> <p>AI 适合做的，正是这种信息压缩和结构化工作。</p> <h2>AI 财报助手能分析什么？</h2> <p>我现在给它设计的输入主要有三类。</p> <p>第一类是财报 PDF，包括年报、季报、10-K、10-Q、港股年报、A 股定期报告等。</p> <p>第二类是财报电话会纪要。很多时候，财报数字只是结果，真正的信息在管理层解释和分析师追问里。</p> <p>第三类是公司公告或财务摘要。有时候不需要完整年报，只需要先快速看一份业绩预告、业绩快报或管理层更新。</p> <p>它的输出尽量固定成几个模块。</p> <h3>1. 核心财务指标</h3> <p>这部分只看最基础的数字：收入、利润、毛利率、经营现金流、自由现金流、债务、现金余额。</p> <p>它的价值不是让数字看起来漂亮，而是先把材料压缩到一屏以内。</p> <h3>2. 关键变化</h3> <p>比如收入为什么增长，利润为什么下降，现金流为什么和净利润不一致。</p> <p>这里不追求结论复杂，而是先把变化方向讲清楚。</p> <h3>3. 风险因素</h3> <p>这部分是我最关心的。</p> <p>因为很多人看财报喜欢看亮点，但真正决定亏钱的，经常是被忽略的风险。比如客户集中、库存积压、应收账款变长、利息费用上升、监管变化、核心产品放缓。</p> <p>AI 不应该替你判断风险有多大，但可以先帮你把这些风险抓出来。</p> <h3>4. 管理层语气</h3> <p>财报里最有意思的地方，是管理层怎么描述同一件事。</p> <p>强势的时候，它会说需求旺盛、订单健康、增长可见。压力大的时候，它会说宏观不确定、客户预算谨慎、短期波动增加。</p> <p>这些措辞变化很值得留意。</p> <p>AI 不应该替你判断真假，但可以帮你把这些表述提取出来，让你回到原文继续核对。</p> <h3>5. 投研检查清单</h3> <p>最后输出一组问题，而不是输出结论。</p> <p>因为投资不是让 AI 给答案，而是让 AI 帮你更快发现该问什么。</p> <p>比如：</p> <ul> <li>收入增长是否依赖单一客户？</li> <li>毛利率变化是结构性改善，还是短期成本波动？</li> <li>自由现金流是否持续为正？</li> <li>库存、应收账款、递延收入有没有异常变化？</li> <li>管理层有没有下调指引？</li> <li>风险因素里有没有新增表述？</li> </ul> <p>这类问题，比一句“这家公司不错”更有价值。</p> <h2>一个简单例子</h2> <p>假设你上传一份公司的年度报告，AI 财报助手不应该直接给你一句“值得投资”或者“不值得投资”。</p> <p>更合理的输出应该是这样：</p> <blockquote> <p>收入增长了 18%，但毛利率从 42% 下降到 37%。管理层解释为新产品推广、渠道补贴和原材料成本影响。经营现金流仍为正，但自由现金流下降，主要受资本开支增加影响。风险因素中新增了“主要客户采购节奏不确定”和“海外监管要求提高”。电话会中，管理层对下一年增长保持乐观，但对短期毛利率恢复没有给出明确时间表。</p> </blockquote> <p>这段话没有替你做投资决策，但它把下一步要查的问题列出来了：</p> <ul> <li>毛利率下降是短期促销，还是竞争加剧？</li> <li>资本开支增加会带来新产能，还是消耗现金？</li> <li>主要客户是不是过于集中？</li> <li>管理层没有明确毛利率恢复时间，是谨慎，还是缺乏把握？</li> </ul> <p>这才是工具应该做的事。</p> <h2>它不能做什么？</h2> <p>这点必须说清楚。</p> <p>AI 财报助手不能预测股价。不能判断一家公司一定会上涨或下跌。不能替代审计师、分析师、投资顾问。也不能保证提取结果 100% 正确。</p> <p>尤其是财报 PDF、表格、扫描件、脚注和复杂会计项目，都会影响解析质量。AI 可以帮助压缩信息，但压缩不等于事实本身。</p> <p>所以我的使用方式是：先让 AI 帮我整理，再回到原文验证关键数字和关键表述。</p> <p>它更像一个投研前置工具，而不是最后的决策工具。</p> <p>如果你已经知道自己要研究哪家公司，它能帮你省下第一轮整理时间。如果你只是想快速扫一批公司，它能帮你先过滤明显风险。如果你想写一篇分析文章，它能帮你先搭出问题框架。</p> <p>但最终判断，还是要靠人。</p> <h2>为什么它适合放在 XBSTACK？</h2> <p>XBSTACK 不是一个纯投资网站，也不是一个纯 AI 教程站。</p> <p>我更想把它做成一个“用技术构建个人资产系统”的地方。</p> <p>AI 技术文章解决的是“怎么做”。工具页面解决的是“做出来以后能不能用”。投资和阅读栏目解决的是“这些工具最终服务什么判断”。</p> <p>所以 AI 财报助手刚好处在几个方向中间。</p> <p>它背后可以接入本地数据、私有数据库、财报文件夹和自动化工作流。如果后续要让 AI 读取本地财报库，可以参考 <a href="/ai/mcp/">MCP 如何让 AI Agent 访问本地数据和私有工具</a>。</p> <p>如果要把财报分析做成自动化流程，比如财报发布后自动抓取、摘要、归档和提醒，可以参考 <a href="/ai/workflow/">AI Workflow 自动化任务处理方法</a>。</p> <p>如果财报数据已经存到本地数据库，也可以参考 <a href="/ai/mcp-server-sqlite/">MCP Server SQLite：让 AI 访问本地 SQLite 数据库</a>。</p> <p>从产品角度看，它不是一个很大的系统。但从个人使用角度看，它能解决一个很真实的问题：我不想每次打开财报都从零开始。</p> <p>我希望先把它做成一个小而稳定的工具，让它能完成三件事：</p> <ul> <li>快速压缩财报信息；</li> <li>标出值得追问的风险；</li> <li>生成下一步人工复核清单。</li> </ul> <h2>后续我想怎么继续做</h2> <p>这个工具后面可以继续往几个方向做。</p> <p>第一，批量分析。一家公司一年一份财报还好，如果要同时看十几家公司，就需要批量提取核心指标和风险变化。</p> <p>第二，多期对比。只看一份财报容易误判，最好能把连续几个季度的数据放在一起，看收入、利润率、现金流和管理层措辞的变化。</p> <p>第三，RAG 知识库。把公司的历史财报、公告、电话会纪要放进知识库，让 AI 不只是分析单份文件，而是能回答跨期问题。</p> <p>第四，本地私有化。财报虽然是公开资料，但如果后续加入个人笔记、观察列表和研究记录，就需要考虑本地存储和隐私边界。</p> <p>第五，接入提醒。比如某家公司发布财报后，自动生成摘要，邮件或消息推送给我。</p> <p>这些功能不一定马上都做，但方向很清楚：先把财报从“厚厚一份 PDF”变成“可复查的问题清单”。</p> <h2>常见问题</h2> ${faqs.map((faq) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate` <h3>${faq.question}</h3> <p>${faq.answer}</p> ` })}`)}<h2>最后</h2> <p>我越来越觉得，AI 工具最有价值的地方，不是让人不思考，而是让人更快进入思考。</p> <p>以前看财报，很多时间花在找数字、翻页、对表、整理摘要上。现在这部分工作可以交给 AI 先做一遍。</p> <p>人真正该做的是判断：这个增长有没有质量，这个风险是不是可控，这个管理层是不是在回避问题。</p> <p>所以我做这个 AI 财报助手，不是为了让它告诉我买什么。</p> <p>而是为了让它提醒我：这份财报里，哪些地方值得再看一眼。</p> <p>你可以在这里试试这个工具：<a href="/tools/ai-finance/">AI Financial Report Analyzer：AI 财报助手</a></p> <p>继续阅读：</p> <ul> <li><a href="/ai/mcp/">MCP 如何让 AI Agent 访问本地数据和私有工具</a></li> <li><a href="/ai/mcp-server-sqlite/">MCP Server SQLite：让 AI 访问本地 SQLite 数据库</a></li> <li><a href="/ai/workflow/">AI Workflow 自动化任务处理方法</a></li> </ul> ` })} ` })}`;
}, "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/how-to-analyze-financial-reports-with-ai.astro", void 0);

const $$file = "/Users/beijingchaoyang/MyWeb/blog/src/pages/tools/how-to-analyze-financial-reports-with-ai.astro";
const $$url = "/tools/how-to-analyze-financial-reports-with-ai/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HowToAnalyzeFinancialReportsWithAi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
