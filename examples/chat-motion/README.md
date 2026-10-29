# 聊天气泡与手绘人物：第一个可修改动效

双击本目录的 `demo.html`，用现代浏览器打开即可。点击“播放”，或拖动进度条前进、回退。示例包含逐条出现并上推的聊天气泡，以及一个从思考到停下来的人物。

运行示例不需要安装 Node.js、Python、GSAP 或视频框架，也不请求在线字体、图片或脚本。浏览器会使用系统中可用的字体，不同系统的文字宽度可能略有区别。

## 先改哪几处

在编辑器中打开 `demo.html`，找到 `createChatBubbles` 的配置。先改两条消息，再刷新浏览器：

```js
messages: [
  { id: 'question', side: 'self', text: '这一镜要讲清什么？', at: 0.5 },
  { id: 'answer', side: 'friend', text: '让一个动作对应一个结果。', at: 2.4 }
]
```

- `messages`：按显示顺序列出消息；`id` 为每条消息的唯一名称。
- `side`：`self` 为右侧，`friend` 为左侧。
- `text`：气泡正文，以纯文本显示。
- `at`：这条消息开始出现的时间，单位为秒；建议按递增顺序填写。
- `width`、`height`、`fontSize`：聊天区域与字号。文案变长后，检查文字换行和气泡边界。

人物的 `sighAt: 6.5` 表示在第 6.5 秒开始停下来、低头。可以把它改为 `4`，观察人物动作与消息之间的关系。

## `seek(seconds)` 是什么

`seek` 的意思是“把画面定位到指定时间”。时间均相对于这个组件，以秒计：

```js
chat.seek(3);       // 显示聊天组件在第 3 秒的状态
person.seek(3);     // 显示人物在同一时刻的状态
chat.seek(0);       // 可以回到开头
chat.seek(3);       // 再次定位到相同时刻
```

组件内部没有自动计时器，也没有随机运动。相同内容、尺寸、字体和时间会得到相同状态；演示页的播放按钮负责持续传入当前时间。浏览器控制台中还可以调用 `window.seekDemo(7)`，同时定位两组动效。

如果自己新建页面，应先加载对应的 CSS 和 JS，准备两个容器，再创建组件。等字体加载完成后定位画面：

```html
<link rel="stylesheet" href="chat-bubbles.css">
<link rel="stylesheet" href="thinking-person.css">
<div id="chat"></div>
<div id="person"></div>
<script src="chat-bubbles.js"></script>
<script src="thinking-person.js"></script>
<script>
  const chat = MotionComponents.createChatBubbles('#chat', {
    width: 900,
    height: 580,
    messages: [
      { id: 'one', side: 'self', text: '从一个小样开始。', at: 0.5 },
      { id: 'two', side: 'friend', text: '先把这一镜做好。', at: 2.4 }
    ]
  });
  const person = MotionComponents.createThinkingPerson('#person', {
    width: 400,
    sighAt: 6.5
  });
  document.fonts.ready.then(() => {
    chat.seek(3);
    person.seek(3);
  });
</script>
```

这个最小页面只显示指定时刻。播放按钮、布局和缩放的完整写法可直接看 `demo.html`。

## 怎样接入视频

这里是浏览器动效示例，尚未包含 MP4 导出器、旁白、字幕或配乐。完整视频需要把组件接到 HyperFrames 等合成框架的主时间轴，再由框架渲染。

接入时用同一个时间基准驱动所有组件。如果镜头在整片第 12 秒开始，整片当前时间为 15 秒，就把 `15 - 12 = 3` 传给这个镜头中的 `seek`。按帧渲染时，整片秒数为 `frame / fps`；不要再给组件添加一套独立播放时钟。

先做一个 10 秒练习：出现问题、出现回答、人物停下来。检查跳到中间、回拖、再次播放时是否一致，再添加其他镜头。

## 文件与来源

| 文件 | 用途 |
|---|---|
| `demo.html` | 可播放、拖动和缩放的完整演示 |
| `chat-bubbles.js` / `chat-bubbles.css` | 聊天气泡、头像占位和上推动作 |
| `thinking-person.js` / `thinking-person.css` | 原创 SVG 人物与思考动作 |

这组组件由本项目“社媒运营”的视频制作实践提炼：聊天布局与上推动作、SVG 人物及其时间控制均为本项目原创代码。公开示例使用中性任务文案和字母头像，保留了原组件的接口与逻辑。可以先替换消息和时间，学习“由时间确定画面”的编排方法。
