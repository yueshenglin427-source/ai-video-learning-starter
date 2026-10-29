# AI 视频学习与复刻入口

我们实际用过的技术栈、搜集的原始提示词，以及可运行的通用动效示例。整理于 2026-10-29。

**找提示词：[PROMPTS.md](PROMPTS.md)。第一次动手：[QUICKSTART.md](QUICKSTART.md)。**

## 最值得先看的原始地址

| 地址 | 学什么 |
| --- | --- |
| [mg-styles-15：15份原始提示词](https://github.com/Vincentwei1021/mg-styles-15/tree/main/prompts) | 按风格挑一个，结合成片和源码学习；具体文件见本仓库 PROMPTS.md |
| [mg-styles-15：完整源码](https://github.com/Vincentwei1021/mg-styles-15) | HTML、SVG、Canvas、Three.js 如何按时间输出画面 |
| [Lemomo / lemo-opuscar](https://github.com/lemomo-ai/lemo-opuscar) | 风格提示词、导演方法与代码制片；提示词在 `styles/<风格>/STYLE.md` |
| [awesome-opus5-5-videos](https://github.com/yihui-dev/awesome-opus5-5-videos) | 作品案例、原作者和配套提示词 |
| [world.execute-me-ascii](https://github.com/yym8224961/world.execute-me-ascii) | 字符空间、终端式画面和音乐 PV |
| [world-execute-me-dsh-pv](https://github.com/MisakaZentai/world-execute-me-dsh-pv) | 聊天界面、左右画面主次、歌词与叙事时间轴 |
| [nagi-studio/skills](https://github.com/nagi-studio/skills) | architect 的选型方法：实际目标、维护成本、决策记录 |

这些参考仓库的研究不等于全部在本地运行通过。mg-styles-15 已保存并阅读固定版本 `49052d80bfaf9fa8412cc9710530e5e95a3b8d8c`，未重渲染整套示例；Lemo 与 PV 仓库主要是源码、制作说明和画面学习。第三方提示词以原作者文件为准，本仓库只提供链接及自行整理的任务模板。

## 我们实际使用的技术栈

下列版本来自原制作工作区，不是所有软件的最新版，也不是本仓库的依赖清单。

| 技术 / 地址 | 用途与实际经验 |
| --- | --- |
| Codex、Claude Code、Cursor | AI协作、脚本、分镜、代码与修订；选择能操作本地文件和终端的工具即可 |
| [Node.js / npm](https://nodejs.org/en/download) | 工具运行环境；本地核对为 Node 24.14.0、npm 11.9.0 |
| HTML / CSS / SVG / Canvas、JS / TS | 排版、几何、路径、聊天、手绘与像素画面；前四项是浏览器原生能力 |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | 实际使用 0.8.183；组织网页动画、预览、按帧导出视频 |
| [GSAP](https://github.com/greensock/GSAP) | 部分正式工程固定 3.15.0；位移、缩放、缓动与可定位时间轴 |
| [Remotion](https://github.com/remotion-dev/remotion) + React / TypeScript | 另一条实际生产路线；多个工程用 4.0.537 或 4.0.539、React 19.2.3、TS 5.9.3 |
| [Three.js](https://github.com/mrdoob/three.js) | 实际三维工程中有 0.186.1；场景、相机、几何、材质与着色器 |
| [Blender](https://www.blender.org/) / [GitHub官方镜像](https://github.com/blender/blender) + Python | 脚本建模、灯光、相机、体积与离线镜头 |
| [FFmpeg / ffprobe](https://github.com/FFmpeg/FFmpeg) | 本地 8.1.2；抽帧、转码、混音、合成、探测和输出检查 |
| [faster-whisper](https://github.com/SYSTRAN/faster-whisper) | 参考视频转写；自动文本需要校对 |
| [百炼 / Qwen TTS](https://bailian.console.aliyun.com/) | 旁白服务、语义分段合成、缓存、局部重录；使用自己的账号与声音 |
| [Git](https://git-scm.com/) + Markdown / JSON / CSV | 版本、分镜、时间码、来源和制作交接 |

**第一次只选一条视频框架。** 没有 React 基础时可以先试 HyperFrames；熟悉 React 时可选 Remotion。空间镜头需要时再加 Three.js 或 Blender。

## 克隆后可以直接试什么

```bash
git clone https://github.com/yueshenglin427-source/ai-video-learning-starter.git
cd ai-video-learning-starter
```

用现代浏览器打开 `examples/chat-motion/demo.html`，点击播放或拖动时间条。这个示例不需要 npm、API 密钥或模型下载。

内容是原创的中性聊天气泡和手绘人物。可以暂停、回退、定位；修改 `demo.html` 中的消息、`at` 时间，就能试自己的版本。接口见 [示例 README](examples/chat-motion/README.md)。

网页示例没有 MP4 导出按钮；完整视频需接入渲染框架，步骤见 [QUICKSTART.md](QUICKSTART.md)。本仓库是独立学习入口，不是整套历史影片的发布备份。

## 进阶候选：已研究，尚未全部接成稳定流程

| 地址 | 用途 |
| --- | --- |
| [BiRefNet](https://github.com/ZhengPeng7/BiRefNet) | 前景分离与透明蒙版 |
| [Depth Anything V2](https://github.com/DepthAnything/Depth-Anything-V2) | 深度估计与分层视差；不等于完整三维模型 |
| [Real-ESRGAN](https://github.com/xinntao/Real-ESRGAN) | 超分与修复候选 |
| [Demucs](https://github.com/facebookresearch/demucs) | 音源分离；实际采用前核对维护状态与权重 |
| [Whisper](https://github.com/openai/whisper) | 转写模型；原工作区实际用的是上表 faster-whisper 路线 |
| [Audiobox Aesthetics](https://github.com/facebookresearch/audiobox-aesthetics) | 候选音频评价，不能代替实际听审 |
| [Hyper3D / Rodin](https://hyper3d.ai/) | 生成三维资产，再接入 Blender 的候选路径 |

MMS强制对齐、BS-RoFormer、Suno、Topaz、生成视频等也出现在参考MV的技术学习中；并非朋友入门时需要装齐的工具。

## 制作方法与来源

先明确观众要看懂的关系，让同一对象跨镜头延续；先做关键静帧与连续短样稿，再扩整片。用统一时间控制画面、字幕与音频，反馈附时间码，局部问题局部改。输出后实际播放检查手机阅读、声音、句尾和衔接。

- [Vibe知识制作教程](https://www.bilibili.com/video/BV1uBpg6qEYM/)：转场、节奏和短样稿。
- [大肥鱼PV制作分享](https://www.bilibili.com/video/BV1bgpE6ZE5n/)：分组打磨、时间码修订、保留已认可版本。
- [《银牌的眼泪》](https://www.bilibili.com/video/BV12DHQ61EhT/)与[《趋光》](https://www.bilibili.com/video/BV1Fbpt6qEPq/)：对象和读数同屏、共同尺度、整体与局部。
- [小白debug《vLLM是什么？》](https://www.bilibili.com/video/BV1Q8HP69EEB/)：像素风的占位、离场补位和局部回到整体。

聊天组件来自作者制作工作区已提炼的原创通用组件，公开示例使用中性消息和字母头像。第三方源码、音乐、角色和模型权重分别遵守其原始声明；例如 [Remotion许可](https://www.remotion.dev/docs/license/pricing)有单独的适用条件。

本次已核对核心GitHub地址、提示词位置、示例语法与本地引用。没有声称所有外部仓库已运行成功，或已在另一台全新电脑完成视频输出复测。
