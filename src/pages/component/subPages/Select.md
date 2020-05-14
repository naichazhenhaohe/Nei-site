<main>

# 选择器 / Select

提供可下拉的选择器。

## 使用说明

<desc>需要能出现一个下拉菜单进行展示选项时使用。</desc>
<desc>选择的选项需要使用到 Select.Option 组件。</desc>
<desc>功能与单选框 Radio 类似。选项较少时，可使用更直观的单选框 Radio。</desc>

## 代码演示

### 基础使用

<playground>
<wrapper>

<Select placeholder='请选择'>
  <Option value='早上睡晚一点'>早上睡晚一点</Option>
  <Option value='晚上早一点睡'>晚上早一点睡</Option>
</Select>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Select } from 'nei-ui'
const Option = Select.Option
() => {
  return (
    <Select placeholder="请选择">
      <Option value="早上睡晚一点">早上睡晚一点</Option>
      <Option value="晚上早一点睡">晚上早一点睡</Option>
    </Select>
  )
}
```

</details>
</playground>

### 禁用

<desc>选择器组件 Select 的禁用可分为两种。</desc>
<desc>对于整个选择器进行禁用或者对选择器内部某一选项进行禁用。</desc>
<desc>在相对应的位置使用 disabled 属性即可进行对指定内容的禁用。</desc>

<playground>
<wrapper>

<Isolator>
  <Select placeholder='请选择'>
    <Option value='早上睡晚一点'>早上睡晚一点</Option>
    <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
  </Select>
  <Select disabled placeholder='请选择'>
    <Option value='早上睡晚一点'>早上睡晚一点</Option>
    <Option value='晚上早一点睡'>晚上早一点睡</Option>
  </Select>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Select } from 'nei-ui'
const Option = Select.Option
() => {
  return (
    <>
      <Select placeholder='请选择'>
        <Option value='早上睡晚一点'>早上睡晚一点</Option>
        <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
      </Select>
      <Select disabled placeholder='请选择'>
        <Option value='早上睡晚一点'>早上睡晚一点</Option>
        <Option value='晚上早一点睡'>晚上早一点睡</Option>
      </Select>
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

<Isolator>
  <Select size='small' placeholder='请选择'>
    <Option value='早上睡晚一点'>早上睡晚一点</Option>
    <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
  </Select>
  <Select size='default' placeholder='请选择'>
    <Option value='早上睡晚一点'>早上睡晚一点</Option>
    <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
  </Select>
  <Select size='large' placeholder='请选择'>
    <Option value='早上睡晚一点'>早上睡晚一点</Option>
    <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
  </Select>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React from 'react'
import { Select } from 'nei-ui'
const Option = Select.Option
() => {
  return (
    <>
      <Select size='small' placeholder='请选择'>
        <Option value='早上睡晚一点'>早上睡晚一点</Option>
        <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
      </Select>
      <Select size='default' placeholder='请选择'>
        <Option value='早上睡晚一点'>早上睡晚一点</Option>
        <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
      </Select>
      <Select size='large' placeholder='请选择'>
        <Option value='早上睡晚一点'>早上睡晚一点</Option>
        <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
      </Select>
    </>
  )
}

```

</details>
</playground>

### 无图标类型

<desc>使用 clear 属性隐藏选择器 Select 右侧图标。</desc>

<playground>
<wrapper>

<Isolator>
  <Select placeholder='请选择' clear>
    <Option value='早上睡晚一点'>早上睡晚一点</Option>
    <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
  </Select>
  <Select placeholder='请选择'>
    <Option value='早上睡晚一点'>早上睡晚一点</Option>
    <Option value='晚上早一点睡'>晚上早一点睡</Option>
  </Select>
</Isolator>

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import { Select } from 'nei-ui'
const Option = Select.Option
() => {
  return (
    <>
      <Select placeholder='请选择' clear>
        <Option value='早上睡晚一点'>早上睡晚一点</Option>
        <Option disabled value='晚上早一点睡'>晚上早一点睡</Option>
      </Select>
      <Select placeholder='请选择'>
        <Option value='早上睡晚一点'>早上睡晚一点</Option>
        <Option value='晚上早一点睡'>晚上早一点睡</Option>
      </Select>
    </>
  )
}
```

</details>
</playground>

### 联动选择器

<desc>同时使用多个选择器，其中选择器之间的选项存在依赖关系。</desc>
<desc>功能与级联选择器 Cascader 类似，同时 Cascader 能更清晰地展示选项，请优先使用级联选择器 Cascader 组件。</desc>

<playground>
<wrapper>

<SelectGroupDemo />

</wrapper>

<details>
<summary>
  <div>查看代码</div>
</summary>

```jsx
import React, { useState } from 'react'
import { Select, Isolator } from 'nei-ui'
const Option = Select.Option
const countries = ['CN', 'USA', 'UK']
const provinces = {
  CN: ['Beijing', 'Shanghai', 'Guangdong'],
  UK: ['London', 'Lincoln', 'Oxford'],
  USA: ['New York', 'Ohio', 'Washington']
}
() => {
  const [country, setCountry] = useState(countries[0])
  const [province, setProvince] = useState(provinces[country][0])
  const selectCountry = next => {
    setCountry(next)
    setProvince(provinces[next][0])
  }
  const selectProvince = next => {
    setProvince(next)
  }
  return (
    <>
      <p style={{ margin: '10px 0' }}>
        {country} - {province}
      </p>
      <Select initValue={countries[0]} value={country} onChange={selectCountry} placeholder="请选择国家">
        {countries.map(country => (
          <Option value={country} key={country}>
            {country}
          </Option>
        ))}
      </Select>
      <Select value={province} onChange={selectProvince} placeholder="请选择省份">
        {provinces[country].map(province => (
          <Option value={province} key={province}>
            {province}
          </Option>
        ))}
      </Select>
    </>
  )
}
```

</details>
</playground>

### 接口

<div style='margin-top: 10px;line-height: 1.5;font-weight: 600;font-size: 1.1rem;'>Select 接口</div>

|       属性        |               描述               | 类型       | 默认值    |
| :---------------: | :------------------------------: | ---------- | --------- |
|     initValue     |           选择器初始值           | string     | -         |
|    placeholder    |           选择器占位符           | string     | -         |
|       value       |            选择器的值            | String     | -         |
| dropdownClassName |           下拉框的类名           | String     | -         |
|     disabled      |          是否禁用选择器          | Boolean    | false     |
|       size        |            选择器尺寸            | SelectSize | 'default' |
|     className     |            自定义类名            | string     | -         |
|        ...        | 其他原生属性，会被添加在选择器上 | -          | -         |

<div style='margin-top: 10px;line-height: 1.5;font-weight: 600;font-size: 1.1rem;'>Option 接口</div>

|   属性    |              描述              | 类型    | 默认值 |
| :-------: | :----------------------------: | ------- | ------ |
|   value   |  选择器选项所代表的值，必填项  | string  | -      |
| disabled  |        选项是否禁止选择        | Boolean | false  |
| className |           自定义类名           | string  | -      |
|    ...    | 其他原生属性，会被添加在选项上 | -       | -      |

### 类型说明

<desc>type SelectSize = 'default' | 'small' | 'large' </desc>

</main>
