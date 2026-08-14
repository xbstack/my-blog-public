const AuthorImage = new Proxy({"src":"/_astro/avatar.BzDyfp9G.webp","width":1024,"height":1024,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/beijingchaoyang/MyWeb/blog/src/assets/avatar.webp";
							}
							
							return target[name];
						}
					});

export { AuthorImage as A };
