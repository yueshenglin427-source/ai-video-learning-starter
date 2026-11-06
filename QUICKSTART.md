# ��һ����һ�ζ�Ƭ

��û�����ʾ��ʱ������� [������ϰ](docs/BEGINNER.md)����ҳ����2026-10-29�˶Թ��İ汾�������Ϊ�̶��汾·�ߣ����ǵ�ǰ���°�˵����

����Ŀ�꣺ԭ��15�C30�룬ֻ��һ�����⣬�ü򵥶���չʾ�仯���ٸ������ۡ�

## ������ʾ��

�� `examples/chat-motion/demo.html`����һ����Ϣ������ `at` ʱ�䡣��ǰ������϶��ٻص�ͬһʱ�䣬�۲컭���Ƿ�ص���ͬ״̬��ʾ���ӿ�������� README��

## HyperFrames ·��

׼�� Node.js �� npm���Լ��ܲ�����Ŀ�ļ���AI���빤�ߡ����ΰ汾����Ϊ Node 24 ϵ�У�HyperFrames 0.8.183 ���� Node >=22�������߼����ʾȱ�������FFmpeg�����ð�ٷ�˵�����롣

������ Windows PowerShell ������Լ�����ϰ��Ŀ¼ִ�У�`friend-pilot` ӦΪ�в����ڵ���Ŀ¼��

```powershell
$env:HYPERFRAMES_SKIP_SKILLS = '1'
npx --yes hyperframes@0.8.183 init friend-pilot --example blank --resolution landscape --non-interactive
Remove-Item Env:HYPERFRAMES_SKIP_SKILLS
Set-Location friend-pilot
npm run dev -- --port 3038
```

������ʱ�����Զ����ܰ�װ����ҪAIר�ü���ʱ���ٰ� [HyperFrames�ٷ����](https://github.com/heygen-com/hyperframes)Ϊ�Լ��Ŀͻ������ã�������Ӧ���ʱֱ��ʹ�á�

�ð�blankģ�������10��հ׹Ǽܡ��� [PROMPTS.md](PROMPTS.md) �ĵ�һ֧��Ƭģ�彻��AI�����¹�����ʵ��15�C30�����ݡ�����ɻ����ʱ���ᣬ�������

�˰汾blankĬ�ϴ�CDN����GSAP 3.14.2�����ǲ�����ʽ����ʹ�ñ���3.15.0��Ҫ������ͬ��ʽ������AI��װ `gsap@3.15.0`����������ű���Ϊ������Դ�����˶�·����

Ԥ�����Ա������С�����һ���ն˽���ͬһ���̣���鲢������

```powershell
npm run check
npm run render -- --output renders/friend-pilot.mp4 --fps 30 --quality high --workers 1
```

���ϲ����Ѷ��ձ���0.8.183��CLI help��ģ��Դ�룻����δ����һ̨ȫ�µ�����ɰ�װ����Ⱦ���⡣��ʧ�ܣ��ȼ�¼��һ����Ч����Node�汾������Ŀ¼��

## Remotion ·��

��ϤReactʱ���ɰ� [Remotion�ٷ����ٿ�ʼ](https://github.com/remotion-dev/remotion)����������Ŀ��

```bash
npx create-video@latest
```

ģ�����ɺ�������README��package.jsonΪ׼������Ԥ������Ⱦ��`latest`��Ӧ��ǰ�½�·�ߣ����־���ĿӦʹ��ԭ���̵����ļ���

## ��һ֧Ƭ���������

���¿����ǡ�������֡�ͬһ�������仯��������������տ������⡱���������֡����Ρ�SVG��������棬��һ���ο���ʾ��ѧϰ��������������ԭ�����⡣

����3�C5�Źؼ�֡��һ�δ�ת���Ķ����壬����չ��������ʵ�ʲ��ţ��������Ļ���ֻ��ߴ�������������ᣬ��β������������ʱ������������֡�����Դ�ļ��������汾����Ƶ���޸ļ�¼��
