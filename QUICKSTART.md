# 第一次做一段短片

建议目标：原创15–30秒，只讲一个问题，用简单对象展示变化，再给出结论。

## 先体验示例

打开 `examples/chat-motion/demo.html`，改一条消息和它的 `at` 时间。向前、向后拖动再回到同一时间，观察画面是否回到相同状态。示例接口详见它的 README。

## HyperFrames 路线

准备 Node.js 与 npm，以及能操作项目文件的AI编码工具。本次版本基线为 Node 24 系列，HyperFrames 0.8.183 声明 Node >=22。若工具检查提示缺浏览器或FFmpeg，按该版官方说明补齐。

以下是 Windows PowerShell 命令。在自己的练习父目录执行，`friend-pilot` 应为尚不存在的新目录：

```powershell
$env:HYPERFRAMES_SKIP_SKILLS = '1'
npx --yes hyperframes@0.8.183 init friend-pilot --example blank --resolution landscape --non-interactive
Remove-Item Env:HYPERFRAMES_SKIP_SKILLS
Set-Location friend-pilot
npm run dev -- --port 3038
```

这里临时跳过自动技能安装。需要AI专用技能时，再按 [HyperFrames官方入口](https://github.com/heygen-com/hyperframes)为自己的客户端配置；已有相应插件时直接使用。

该版blank模板最初是10秒空白骨架。将 [PROMPTS.md](PROMPTS.md) 的第一支短片模板交给AI，在新工程中实现15–30秒内容。先完成画面和时间轴，再输出。

此版本blank默认从CDN加载GSAP 3.14.2；我们部分正式工程使用本地3.15.0。要采用相同方式，可让AI安装 `gsap@3.15.0`，把浏览器脚本改为本地资源，并核对路径。

预览可以保持运行。在另一个终端进入同一工程，检查并导出：

```powershell
npm run check
npm run render -- --output renders/friend-pilot.mp4 --fps 30 --quality high --workers 1
```

以上参数已对照本地0.8.183的CLI help与模板源码；本次未在另一台全新电脑完成安装和渲染复测。若失败，先记录第一条有效错误、Node版本和运行目录。

## Remotion 路线

熟悉React时，可按 [Remotion官方快速开始](https://github.com/remotion-dev/remotion)建立独立项目：

```bash
npx create-video@latest
```

模板生成后，以它的README和package.json为准启动、预览和渲染。`latest`对应当前新建路线；复现旧项目应使用原工程的锁文件。

## 第一支片的完成条件

故事可以是“问题出现→同一对象发生变化→看到结果→回收开场问题”。先用文字、几何、SVG或聊天界面，挑一个参考提示词学习动作方法并换成原创主题。

先做3–5张关键帧和一段带转场的短样稿，再扩展。导出后实际播放：主体和字幕在手机尺寸清楚，动作连贯，句尾完整；有声音时检查人声与音乐。保留源文件、依赖版本、视频和修改记录。
