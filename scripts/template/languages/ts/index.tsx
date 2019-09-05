import React, { Component } from 'react';

export type {{name}}Props = {};
type {{name}}State = {};

const prefixCls = '{{className}}';

class {{name}} extends Component<{{name}}Props, {{name}}State> {
    render() {
        return (
            <div className={prefixCls}>
                {{name}}
            </div>
        );
    }
}

export default {{name}};
