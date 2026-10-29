# AI 视频提示词：原始来源与可复制练习

整理与链接核对：2026-10-29。这里收录我们学习过的公开提示词入口，以及三份重新编写的练习模板。第三方原文保留在作者仓库；下方模板由本资料包原创编写，没有复制第三方完整提示词。

第一次尝试：从第4节选一份模板，填好主题和已有工具；想指定画风，再从第1、2节挑一个来源交给助手阅读。一次选一个方向，完成短片后再扩展。

## 1. mg-styles-15：15份完整风格提示词

[作者仓库](https://github.com/Vincentwei1021/mg-styles-15) · [效果目录](https://vincentwei1021.github.io/mg-styles-15/?lang=zh) · [提示词目录](https://github.com/Vincentwei1021/mg-styles-15/tree/main/prompts)

这个仓库把原始提示词放在 **`prompts/*.md`**，对应实现放在 **`demos/<同名风格>/`**。先看效果，再读提示词，最后对照实现；提示词里建议的工具与最终源码可能不同。我们已做源码与画面对照，尚未在本资料包中重跑所有示例。

| 风格 | 原始提示词 | 适合练习什么 |
|---|---|---|
| 扁平矢量 | [01-flat-vector.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/01-flat-vector.md) | 简单对象、状态与流程 |
| 线条动画 | [02-line-art.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/02-line-art.md) | 路径导读、逐步呈现、观看顺序 |
| 等轴2.5D | [03-isometric.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/03-isometric.md) | 部件组成系统、空间组织 |
| 3D渲染 | [04-3d-render.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/04-3d-render.md) | 材质、接触、形体与光照 |
| 逐帧手绘 | [05-cel-boil.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/05-cel-boil.md) | 离散换画、手绘轮廓与动作节奏 |
| 拼贴 | [06-collage.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/06-collage.md) | 图片拆层、纸张与素材组合 |
| 液态 | [07-liquid.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/07-liquid.md) | 汇聚、分裂、流动与短转场 |
| 形变 | [08-morph.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/08-morph.md) | 轮廓对应、中间态、对象交接 |
| 包豪斯几何 | [09-bauhaus.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/09-bauhaus.md) | 网格、比例、有限色彩与构成 |
| Synthwave / VHS | [10-synthwave.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/10-synthwave.md) | 复古场景和影像质感 |
| 渐变与玻璃 | [12-aurora-glass.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/12-aurora-glass.md) | 产品界面与层次 |
| 综艺花字 | [18-hanazi.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/18-hanazi.md) | 少量重点字与口播语气 |
| 贴纸科普 | [19-paperclip.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/19-paperclip.md) | 现实对象→部件→分类→全局，推荐先读 |
| 像素风 | [20-pixel.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/20-pixel.md) | 低分辨率画布、状态反馈、游戏类比 |
| HUD / FUI | [22-hud.md](https://github.com/Vincentwei1021/mg-styles-15/blob/main/prompts/22-hud.md) | 仪器读数、追踪与观察状态 |

补充入口：[新风格提示词模板](https://github.com/Vincentwei1021/mg-styles-15/blob/main/template.md)、[评审标准](https://github.com/Vincentwei1021/mg-styles-15/blob/main/rubric.md)。我们的早期学习对应[固定版本49052d8](https://github.com/Vincentwei1021/mg-styles-15/tree/49052d80bfaf9fa8412cc9710530e5e95a3b8d8c)；上表链接指向作者当前主分支。

## 2. Lemo-Opuscar：风格说明＋制作管线

[作者仓库与效果索引](https://github.com/lemomo-ai/lemo-opuscar) · [统一制作说明TECHNIQUE.md](https://github.com/lemomo-ai/lemo-opuscar/blob/main/TECHNIQUE.md)

它的风格提示词位于 **`styles/<风格>/STYLE.md`**。可把选中的文件交给助手，说明要借鉴哪些视觉特征，再提供自己的主题。`STYLE.md`主要定义风格，`TECHNIQUE.md`负责制作方法；读过提示词不等于已经安装或运行整套工程。

| 已核对的入口 | 用途 |
|---|---|
| [白板讲解：whiteboard/STYLE.md](https://github.com/lemomo-ai/lemo-opuscar/blob/main/styles/whiteboard/STYLE.md) | 在连续白板上用绘制、擦除和镜头移动解释关系 |
| [数据叙事：dataviz/STYLE.md](https://github.com/lemomo-ai/lemo-opuscar/blob/main/styles/dataviz/STYLE.md) | 让图表变化承担故事，适合真实数据对照 |
| [积木场景：brick-toy/STYLE.md](https://github.com/lemomo-ai/lemo-opuscar/blob/main/styles/brick-toy/STYLE.md) | 桌面微缩空间、塑料材质、定格动作 |
| [像素RPG：pixel-rpg/STYLE.md](https://github.com/lemomo-ai/lemo-opuscar/blob/main/styles/pixel-rpg/STYLE.md) | 用对话框、菜单、状态变化组织像素故事 |

我们学习过其中的Three.js场景与后期分层、统一时间线和检查办法；这里没有把作者的演示片或第三方音乐重新打包。

## 3. Awesome Opus 5.5 Videos：按效果找提示词

[案例总表](https://github.com/yihui-dev/awesome-opus5-5-videos) · [全部提示词文件](https://github.com/yihui-dev/awesome-opus5-5-videos/tree/main/prompts)

这是案例与提示词索引。每个条目可继续找到原作者帖子；部分条目只有片段或效果描述，不能假定每份都是完整可运行工程。先选一个效果，再检查它提供了提示词、源码还是仅展示视频。

两个与工程练习直接相关的例子：

- [GSAP时间线与逐帧检查](https://github.com/yihui-dev/awesome-opus5-5-videos/blob/main/prompts/fleyta88-443662.md)：一个较短的任务提示词，关注时间安排和局部修正。
- [按帧确定画面的渲染思路](https://github.com/yihui-dev/awesome-opus5-5-videos/blob/main/prompts/0xkarmi-129839.md)：偏制作方法描述，适合理解“画面状态由帧号决定”，不能当成完整实现脚本。

原仓库名称中的模型名是来源背景。这份资料包不要求使用同一模型，也不承诺把同一提示词粘贴到不同环境就得到相同成片。

## 4. 原创模板A：完成第一条15—30秒科普短片

适合已经能在电脑上读写文件、运行代码的AI助手。把方括号内容替换后整段复制。首次可以选“二分查找为什么每次排除一半”这类单一、易验证的小问题。

```text
请实际完成一条15—30秒的原创科普短片，并保留可再次修改和导出的工程。

主题：[一句话主题]
观众：[例如没有编程基础的高中生]
看完能复述的结论：[只写一条]
内容来源：[我提供的资料或可信公开来源；若不足，先查证相关事实]
已有环境：[已有工程路径和框架；没有工程则写“新建独立工程”]
视觉方向：[扁平图解／线条／贴纸／像素等，只选一个]
参考提示词：[可选，贴本页某个来源链接；只借鉴指定的表现方法]
输出规格：1920×1080、30fps、H.264 MP4。
声音：[无声／我提供的旁白和音乐；未提供时先做无声版]

先用一句话说清这条片要解释什么，然后写3—5个镜头：
每镜列出问题、保留的对象、发生的变化、观众看到的结果、必要文字和时长。
让对象的移动、数量、位置或状态展示关系；结论出现前，画面先给出支持它的变化。
前后沿用同一套对象身份与方向。镜头或尺度改变时保留参照。
正文与标签按手机观看尺寸检查，给结论留出完整阅读时间。

技术上优先沿用现有工程；新工程只选一条足够完成目标的路线，并说明理由。
画面状态由统一时间或帧号决定，支持定位和回退；随机效果固定种子。
新工程独立安装依赖并保留锁文件，资产和配置使用相对路径。
如果借用第三方素材，在来源文件记录出处与使用条件。

实际实施：先渲染开头、主要变化、结论三处关键帧，再导出代表性连续短段。
查看具体画面和动作，修正遮挡、读不完、对象跳变及不能说明结论的问题。
完成内部检查后直接导出整条短片，不只交方案。

交付MP4、3张关键帧、源码、运行与导出命令、简短来源记录。
说明实际检查过哪些内容、还剩哪些问题；没有实际查看或听审的部分如实标注。
```

## 5. 原创模板B：按时间码局部修订

比“再高级一点”更有效的输入是：时间码、看到了什么问题、希望观众看懂什么。

```text
请修改现有短片的指定段落，完成局部验证并导出修订结果。

工程：[工程目录或仓库]
基准版本：[文件名或提交]
修改区间：[例如00:08.0—00:13.5]
当前问题：[例如两个对象突然交换位置，观众无法追踪同一个对象]
想传达的关系：[例如同一条请求从等待区进入处理区]
希望发生的动作：[例如保持颜色和编号，沿连续路径移动，到位后再出现结果]
已认可内容：[具体镜头、旁白、音乐或字幕]
交付范围：[局部短片／局部检查后再导出全片]

先读取当前工程、时间线和相关素材，核实这个区间的实际实现。
保留基准版本，在新版本里修改；依照上面的目标判断必要影响范围。
使用时间码列出改动，保留两端各一小段上下文，让转场也能接受检查。
若改变句长或镜头时长，重新核对受影响的字幕、声音与后续时间位置。

先输出关键帧与连续短段，实际检查对象身份、运动方向、阅读停留和边界接缝。
对有声音变动的部分实际听审。发现问题时只修有明确证据的部分。
按交付范围完成导出，并附修改前后对照、实际检查记录和剩余问题。
```

## 6. 原创模板C：学习参考视频并提炼可复用方法

适合带朋友一起分析喜欢的作品，再做一个原创练习。

```text
请研究这条公开参考视频，目标是提炼可迁移的制作方法。

参考：[视频链接或我提供的视频文件]
最想学：[例如对象交接、视线引导、像素动作、镜头尺度或音乐落点]
我的后续主题：[准备做什么内容]
当前工具：[已知框架和工具，没有则说明未知]

先核实作品、作者、公开说明以及是否有对应源码或提示词。
遵守来源的访问限制；资料无法取得时说明缺项，不推测自己没看到的内容。
记录实际观看和听审范围：全片播放、抽帧、连续片段、字幕阅读分别写清。

选3—5处最有价值的时间点，每处回答：
1. 画面中实际发生了什么？
2. 哪个对象或关系让观众跟得上？
3. 动作、文字和声音分别承担什么作用？
4. 对新主题可以复用什么方法，需要重新设计什么？

将“画面观察”“作者公开说明”“源码证据”“你的建议”分开。
不能仅凭画面相似断言用了某个模型、框架或三维软件。
如果有GitHub仓库，核对提示词和实现的准确路径，并说明哪些内容没有实际运行。

最后提出一个10—20秒的原创练习：给出问题、主体、动作、关键帧和检查方法。
保留原作者链接。交付一份简洁学习笔记和这段练习的可执行制作提示词。
这轮先完成分析与练习设计，不默认启动完整影片制作。
```

## 使用与出处

本页链接已按2026-10-29的公开仓库目录或文件核对；作者主分支以后可能改动。做复刻记录时保存自己实际采用的commit、运行命令和依赖版本。

第三方提示词、代码、演示视频、音乐、角色和模型权重可能适用不同许可。沿用相应作者的署名与许可说明；本资料包没有重新授权那些资产。
