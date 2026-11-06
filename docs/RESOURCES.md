# 按任务选择参考项目

新资料核对日期：2026-11-07。以下按用途归类；“读过文档”与“已经运行”分开记录。

| 需要什么 | 项目 | 适合学习什么 | 当前验证范围 |
|---|---|---|---|
| 一个直接可改的起点 | [本仓库聊天示例](../examples/chat-motion/README.md) | 内容、动作与统一时间控制 | 原有本地示例；使用方法与限制见示例说明 |
| 成熟动作的检索与复用 | [WiseWong6/wise-motion](https://github.com/WiseWong6/wise-motion) | 动作目录、参数、源码、预览、Remotion 接入与 Skill 检索入口 | README、Skill 入口及接口文档研究；未安装试渲染 |
| 口播剪辑与制作流程 | [ttfake92-lab/ai-workflow-prompts](https://github.com/ttfake92-lab/ai-workflow-prompts) | 转录缓存、剪辑决定、保留自然停顿、局部修订 | 提示词阅读；没有在本仓库实现或运行其服务链 |
| 完整模板怎样打包 | [motiontemplates/all](https://github.com/motiontemplates/all) | 效果、模板说明、代码、依赖与素材的交付关系 | 已研究部分条目；各模板公开程度不同，未在本仓库渲染 |
| 从效果找风格与提示词 | [mg-styles-15](https://github.com/Vincentwei1021/mg-styles-15) | 对照效果、提示词和实现 | 历史固定版本研究，见 [PROMPTS](../PROMPTS.md) |

## wise-motion：先确认能复用到什么程度

它把动作与实际实现关联起来，并提供 Remotion 组件。部分条目能导出独立工程，另一些通过共享组件包和素材接入；采用前读 [REMOTION.md](https://github.com/WiseWong6/wise-motion/blob/main/REMOTION.md)。

普通目录默认以16:9逻辑画板等比缩放，不能把换分辨率理解成自动重排竖屏。内容替换有字段、数量和长度限制，字体、颜色等也并非每个动作都任意可改。依赖版本须与目标工程匹配，先在独立练习工程验证。

本次研究所见源码版本：`29285fb36e09d1c9bbbbb6458d804e1bdfe30259`。作者后续更新可能改变接口。自有代码声明 Apache-2.0，第三方字体、音乐、图片等仍看各自来源声明。

## ai-workflow-prompts：借鉴流程，不误认成软件功能

重点文件：[talking-head-edit.md](https://github.com/ttfake92-lab/ai-workflow-prompts/blob/main/prompts/talking-head-edit.md)。值得采用的是：原素材保留、逐词转录缓存、剪点听审、保留情绪性停顿，以及只重做受影响步骤。

仓库主要提供 Markdown 提示词，完整执行还需要相应工具和服务。提示词里的置信度阈值、停顿长度和淡化时长是流程建议，不能代替实际音画检查。逐词时间戳也不保证每个剪点都没有切坏发音。

它的数字人分支涉及额外服务；完成本仓库入门练习不需要这些服务。原项目声明 MIT，外部服务和素材不因此统一获得授权。

## 选择顺序

先选一个你能解释清楚用途的例子，试改一个内容，再试一次导出。确认适合自己的画面目标后，保存采用的版本与实际命令。遇到不匹配的动作，重新设计比强套模板更合适。

更多风格、三维和声音方向见 [历史学习记录](REFERENCE-NOTES.md)。项目数量不代表制作能力，能稳定改好一个镜头才算形成可复用成果。
