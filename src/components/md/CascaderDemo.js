import React from 'react'
import { Cascader, Isolator } from 'nei-ui'

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

export const BasicCascader = () => {
  return (
    <div>
      <Cascader options={options} placeholder="请选择" />
    </div>
  )
}

export const SizeCascader = () => {
  return (
    <Isolator>
      <Cascader size="small" options={options} placeholder="请选择" />
      <Cascader size="default" options={options} placeholder="请选择" />
      <Cascader size="large" options={options} placeholder="请选择" />
    </Isolator>
  )
}

export const SeparatorCascader = () => {
  return (
    <Isolator>
      <Cascader options={options} placeholder="分隔符为 / " />
      <Cascader separator="@" options={options} placeholder="分隔符为 @ " />
      <Cascader separator="&" options={options} placeholder="分隔符为 & " />
    </Isolator>
  )
}

export const DisabledCascader = () => {
  return (
    <Isolator>
      <Cascader disabled options={options} placeholder="禁用所有" />
      <Cascader options={options} placeholder="禁用某一选项" />
    </Isolator>
  )
}
