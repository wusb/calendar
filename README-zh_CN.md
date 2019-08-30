# Clendar [Demo](https://simbawus.github.io/calendar)

[![npm](https://img.shields.io/npm/v/calendar-lite.svg)](https://www.npmjs.com/package/calendar-lite)
[![npm](https://img.shields.io/npm/dt/calendar-lite.svg)](https://www.npmjs.com/package/calendar-lite)
[![GitHub license](https://img.shields.io/github/license/simbawus/calendar.svg)](https://github.com/simbawus/calendar/blob/master/LICENSE)

###### [README in English](README.md)

- 原生 js 开发、不依赖任何框架和库的轻量级移动端数字键盘
- API 简洁，非常好上手

![example](https://up.boohee.cn/house/u/pixiu/calendar.gif)

## 属性

| Property         | Type     | Default           | Description              |
| :--------------- | :------- | :---------------- | :----------------------- |
| el               | DOM      | -                 | 日历父节点               |
| currentDate      | String   | today(yyyy/MM/dd) | 当前日期                 |
| onDayClick       | Function | -                 | 点击日期时触发           |
| onClickPreMonth  | Function | -                 | 点击箭头去上一个月时触发 |
| onClickNextMonth | Function | -                 | 点击箭头去下一个月时触发 |
| onMonthChange    | Function | -                 | 月份改变时触发           |

## 开始上手

### 使用示例

```shell
yarn add calendar-lite --dev
```

### 使用示例

- **Native JavaScript**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="author" content="simbawu" />
    <title>calendar</title>
  </head>
  <body>
    <div id="values"></div>
    <div id="app"></div>
    <script src="./calendar.js"></script>
  </body>
</html>
```

```javascript
//calendar.js
import Calendar from "calendar-lite";

function onDayClick(date) {
  console.log(date); // choose date
}

new Calendar({
  el: document.querySelector("#app"),
  currentDate: "2019/08/28",
  onDayClick
});
```

- **React**

```jsx
import React from "react";
import Calendar from "calendar-lite";

class CalendarPage extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.renderCalendar();
  }

  onDayClick = date => {
    console.log(date); // choose date
  };

  renderCalendar = () => {
    return new Calendar({
      el: this.refs.slideRuler,
      currentDate: "2019/08/28",
      onDayClick: this.onDayClick
    });
  };

  render() {
    return <div ref="slideRuler" />;
  }
}

export default CalendarPage;
```

- **Vue**

```js
<template>
  <div></div>
</template>
<script>
import Calendar from 'calendar-lite';
export default {
  mounted () {
    this.renderCalendar();
  },
  methods: () {
    renderCalendar() {
    	return new Calendar (
        {
          el: this.$el,
          currentDate: "2019/08/28",
          onDayClick: onDayClick
        }
      );
    },

    onDayClick(date) {
      console.log(date); // choose date
    }
  }
}
</script>
```

- **Angular**

```typescript
import { Component, ViewChild, OnInit, ViewEncapsulation } from "@angular/core";
import Calendar from "calendar-lite";

@Component({
  selector: "my-app",
  template: `
    <div #calendar></div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild("calendar") calendar;

  ngOnInit() {
    this.renderCalendar();
  }

  renderCalendar() {
    return new Calendar({
      el: this.calendar.nativeElement,
      currentDate: "2019/08/28",
      onDayClick: onDayClick
    });
  }

  onDayClick(date) {
    console.log(date); // choose date
  }
}
```

## 如何贡献

欢迎每个人为这个项目做出贡献。可以从查看我们[未解决的问题](https://github.com/simbawus/calendar/issues),[提交新问题](https://github.com/simbawus/calendar/issues/new?labels=bug) 或[提出新功能](https://github.com/simbawus/calendar/issues/new?labels=enhancement), 入手，参与讨论投票您喜欢或不喜欢的问题。

## 开源证书

[**The MIT License**](LICENSE).
