import React from 'react'

class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default MainLayout