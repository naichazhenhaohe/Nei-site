<main>

# 级联选择器 / Cascader

提供可下拉的级联选择器。

## 使用说明

<desc>需要从一组存在级序关系的数据中进行选取时使用。</desc>
<desc>可使用多个选择器 Select 实现同样的功能。但是相比之下级联选择器 Cascader 在同一层浮窗中完成选择，更加清晰。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<BasicCascader/>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React from 'react'
import { Cascader } from 'nei-ui'
const options = [
  {
    value: 'plant',
    label: '植物',
    children: [
      {
        value: 'algae',
        label: '藻类',
        children: [
          {
            value: 'cyanophyte',
            label: '蓝绿藻门'
          }
        ]
      }
    ]
  },
  {
    value: 'animal',
    label: '动物',
    children: [
      {
        value: 'mammal',
        label: '哺乳动物',
        children: [
          {
            value: 'humanity',
            label: '人类'
          }
        ]
      },
      {
        value: 'birds',
        label: '鸟类',
        disabled: true,
        children: [
          {
            value: 'sparrow',
            label: '麻雀'
          }
        ]
      },
      {
        value: 'amphibian',
        label: '两栖类'
      },
      {
        value: 'reptiles',
        label: '爬行类'
      },
      {
        value: 'fish',
        label: '鱼类'
      },
      {
        value: 'insects',
        label: '昆虫类'
      }
    ]
  }
]
() => {
  return (
    <>
      <Cascader options={options} placeholder="请选择" />
    </>
  )
}
```

</details>
</playground>

### 尺寸

<desc>自设三种尺寸，通过属性 size 设置。</desc>
<desc>size 属性值类型为 string ，默认为 'default' , 可为如下</desc>

<ul>
  <li>small</li>
  <li>default</li>
  <li>large</li>
</ul>

<playground>
<wrapper>

<SizeCascader />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React from 'react'
import { Cascader } from 'nei-ui'
const options = [
  {
    value: 'plant',
    label: '植物',
    children: [
      {
        value: 'algae',
        label: '藻类',
        children: [
          {
            value: 'cyanophyte',
            label: '蓝绿藻门'
          }
        ]
      }
    ]
  },
  {
    value: 'animal',
    label: '动物',
    children: [
      {
        value: 'mammal',
        label: '哺乳动物',
        children: [
          {
            value: 'humanity',
            label: '人类'
          }
        ]
      },
      {
        value: 'birds',
        label: '鸟类'
      },
      {
        value: 'amphibian',
        label: '两栖类'
      },
      {
        value: 'reptiles',
        label: '爬行类'
      },
      {
        value: 'fish',
        label: '鱼类'
      },
      {
        value: 'insects',
        label: '昆虫类'
      }
    ]
  }
]
() => {
  return (
    <>
      <Cascader size="small" options={options} placeholder="请选择" />
      <Cascader size="default" options={options} placeholder="请选择" />
      <Cascader size="large" options={options} placeholder="请选择" />
    </>
  )
}

```

</details>
</playground>

### 分隔符

<desc>级联选择器的选择结果会在输入框内展现，各级选项之间由分隔符进行分隔。</desc>
<desc>分隔符由 separator 属性进行控制，默认为 '/'</desc>

<playground>
<wrapper>

<SeparatorCascader />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React from 'react'
import { Cascader } from 'nei-ui'
const options = [
  {
    value: 'plant',
    label: '植物',
    children: [
      {
        value: 'algae',
        label: '藻类',
        children: [
          {
            value: 'cyanophyte',
            label: '蓝绿藻门'
          }
        ]
      }
    ]
  },
  {
    value: 'animal',
    label: '动物',
    children: [
      {
        value: 'mammal',
        label: '哺乳动物',
        children: [
          {
            value: 'humanity',
            label: '人类'
          }
        ]
      },
      {
        value: 'birds',
        label: '鸟类',
        disabled: true,
        children: [
          {
            value: 'sparrow',
            label: '麻雀'
          }
        ]
      },
      {
        value: 'amphibian',
        label: '两栖类'
      },
      {
        value: 'reptiles',
        label: '爬行类'
      },
      {
        value: 'fish',
        label: '鱼类'
      },
      {
        value: 'insects',
        label: '昆虫类'
      }
    ]
  }
]
() => {
  return (
    <>
      <Cascader size="small" options={options} placeholder="请选择" />
      <Cascader size="default" options={options} placeholder="请选择" />
      <Cascader size="large" options={options} placeholder="请选择" />
    </>
  )
}

```

</details>
</playground>

### 禁用

<desc>与选择器组件 Select 一致，级联选择器 Cascader 也可对于整个选择器进行禁用和对选项进行禁用。</desc>
<desc>对于选项进行禁用时，即使该选项具有子代选项，也不会被显示。</desc>
<desc>对于指定选项进行禁用时，仅需在 options 属性的值中，对应的对象元素位置加上 'disabled: true' 即可。</desc>

<playground>
<wrapper>

<DisabledCascader />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React from 'react'
import { Cascader } from 'nei-ui'
const options = [
  {
    value: 'plant',
    label: '植物',
    children: [
      {
        value: 'algae',
        label: '藻类',
        children: [
          {
            value: 'cyanophyte',
            label: '蓝绿藻门'
          }
        ]
      }
    ]
  },
  {
    value: 'animal',
    label: '动物',
    children: [
      {
        value: 'mammal',
        label: '哺乳动物',
        children: [
          {
            value: 'humanity',
            label: '人类'
          }
        ]
      },
      {
        value: 'birds',
        label: '鸟类',
        disabled: true,
        children: [
          {
            value: 'sparrow',
            label: '麻雀'
          }
        ]
      },
      {
        value: 'amphibian',
        label: '两栖类'
      },
      {
        value: 'reptiles',
        label: '爬行类'
      },
      {
        value: 'fish',
        label: '鱼类'
      },
      {
        value: 'insects',
        label: '昆虫类'
      }
    ]
  }
]
() => {
  return (
    <>
      <Cascader disabled options={options} placeholder="禁用所有" />
      <Cascader options={options} placeholder="禁用某一选项" />
    </>
  )
}

```

</details>
</playground>
### 接口

|   属性    |            描述            | 类型               | 默认值    |
| :-------: | :------------------------: | ------------------ | --------- |
|  options  | 级联选择器选项数据，必填项 | OptionType         | -         |
|   size    |      级联选择器的大小      | CascaderSize       | 'default' |
| separator | 级联选择器各级值之间分隔符 | String             | '/'       |
| disabled  |       禁用级联选择器       | Boolean            | false     |
| onChange  |          点击事件          | (event, value)=>{} | -         |
| className |         自定义类名         | string             | -         |

### 类型说明

<desc>type OptionType = {
value\<string\>, label\<string\>, children\<Array\>, disabled\<Boolean\>
} </desc>

<desc>type CascaderSize = 'default' | 'small' | 'large' </desc>

</main>
