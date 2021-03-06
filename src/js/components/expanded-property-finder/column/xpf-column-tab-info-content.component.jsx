import React, {Component} from "react";

class XpfColumnTabInfoContent extends Component {
    constructor(props) {
        super(props);

        let {model} = props;

        this.state = {
            content: model
        };
    }

    componentWillReceiveProps({model}) {
        this.setState({
            content: model
        });
    }

    render() {
        let {state: {content: {title, paragraphs}}} = this;

        let InfoParagraph = ({title, content}) => (
            <div className="paragraph">
                <h5 className="header">{title}</h5>
                <p className="text">
                    {content}
                </p>
            </div>
        );

        let paragraphObjects = Object.keys(paragraphs)
                                     .map(key =>
                                         <InfoParagraph title={key}
                                                        content={paragraphs[key]}/>);

        return (
            <div className="infotab">
                <h4 className="title">{title}</h4>
                {paragraphObjects}
            </div>
        );
    }
}

export default XpfColumnTabInfoContent;