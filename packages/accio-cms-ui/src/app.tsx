import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

type H1Props = {
  dataColor?: string
}

const styles = (props: H1Props) => css`
  display: inline-block;
  color: ${props.dataColor || 'red'};
`

const H1 = styled('h1')<H1Props>(styles)

export type AppProps = {
  msg: string
  dataColor?: string
}

const App: React.SFC<AppProps> = ({ msg, dataColor }) => {
  return <H1 dataColor={dataColor}>{ msg }</H1>
}

export default App
