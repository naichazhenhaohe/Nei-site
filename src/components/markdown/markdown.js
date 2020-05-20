import React from 'react'
import Markdown from 'markdown-to-jsx'
import {
  Main,
  H,
  T,
  Playground,
  Wrapper,
  Summary,
  Details,
  Description,
  Ul,
  InputDemo,
  CheckboxDemo,
  CheckboxGroupDemo,
  RadioGroupDemo,
  SelectGroupDemo,
  BasicCascader,
  SizeCascader,
  SeparatorCascader,
  DisabledCascader,
  CardDemo,
  A,
  InlineCode,
  Link,
  ColorBox
} from './components'
import {
  Button,
  Spacer,
  Isolator,
  Input,
  Checkbox,
  Radio,
  Select,
  Cascader,
  Card,
  Progress,
  Tag,
  Switch,
  Tooltip
} from 'nei-ui'

export default React.memo(({ content }) => {
  const options = {
    forceBlock: true,
    overrides: {
      main: Main,
      h1: H.H1,
      h2: H.H2,
      h3: H.H3,
      playground: Playground,
      wrapper: Wrapper,
      summary: Summary,
      details: Details,
      desc: Description,
      ul: Ul,
      td: T.Td,
      tr: T.Tr,
      th: T.Th,
      table: T.Table,
      thead: T.Thead,
      a: A,
      inlineCode: InlineCode,
      ColorBox: {
        component: ColorBox
      },
      Link: {
        component: Link
      },
      Switch: {
        component: Switch
      },
      Tooltip: {
        component: Tooltip
      },
      Tag: {
        component: Tag
      },
      Progress: {
        component: Progress
      },
      Card: {
        component: Card
      },
      CardDemo: {
        component: CardDemo
      },
      Button: {
        component: Button
      },
      Spacer: {
        component: Spacer
      },
      Isolator: {
        component: Isolator
      },
      Input: {
        component: Input
      },
      InputDemo: {
        component: InputDemo
      },
      Checkbox: {
        component: Checkbox
      },
      Radio: {
        component: Radio
      },
      CheckboxDemo: {
        component: CheckboxDemo
      },
      Option: {
        component: Select.Option
      },
      Select: {
        component: Select
      },
      CheckboxGroupDemo: {
        component: CheckboxGroupDemo
      },
      RadioGroupDemo: {
        component: RadioGroupDemo
      },
      SelectGroupDemo: {
        component: SelectGroupDemo
      },
      Cascader: {
        component: Cascader
      },
      BasicCascader: {
        component: BasicCascader
      },
      SizeCascader: {
        component: SizeCascader
      },
      SeparatorCascader: {
        component: SeparatorCascader
      },
      DisabledCascader: {
        component: DisabledCascader
      }
    }
  }

  return <Markdown children={content || ''} options={options} />
})
