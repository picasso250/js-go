# js-go

1. 允许大块棋子自杀（但是单棋自杀不行，是禁着）
2. 没有检测打劫（也可以加入严格检测打劫的代码，那种三劫循环也可以检测出来的）
3. 仅在firefox上测试过

|who|工分|
|---|----|
xiaochi | 10
面壁者 | 3
早 | 1

算法（当用户点下）：

1. 此处是否有棋子
2. 落子
3. 加入到已有棋块
4. 重新计算所有的气
5. 提子（如果都不能提，则看是否禁着）