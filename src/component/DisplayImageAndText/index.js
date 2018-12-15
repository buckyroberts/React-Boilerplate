import React from 'react';



class DisplayImageAndText extends React.Component {

    handleClick = () => {
        this.props.onHandleClick(this.props.textImage, this.props.id);
    }
    //All Images must be Exactly the size of Height=683px, Width=1024px to look proportional OR atleast have left and right images of the same size
    render() {   
    return (
            <div>
                <a href="www.google.com">HIIIII</a>
            </div>
        );
    }
}
export default DisplayImageAndText;