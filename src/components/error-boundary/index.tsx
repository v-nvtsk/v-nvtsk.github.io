import React, { PropsWithChildren } from 'react'

export class ErrorBoundary extends React.Component<PropsWithChildren> {
  state = { hasError: false }

  constructor(props: PropsWithChildren) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: unknown, info: unknown) {
    this.setState({ hasError: true })
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
