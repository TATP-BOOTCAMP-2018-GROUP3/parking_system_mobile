import React, { Component } from 'react';
import { WhiteSpace, WingBlank, Result, Icon, Button } from 'antd-mobile';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

class LastOrderPage extends Component {

    saveAsPdf = () => {
        const input = document.getElementsByClassName("save-pdf-component")[0];
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("portrait", "mm", [297+16, 210]);
            pdf.addImage(imgData, 'JPEG', -150, 0);
            
            pdf.save("ticket-" + this.props.orderId + ".pdf");
          })
        ;
    }

    render() {
        return (
            <WingBlank size="md">
                <WhiteSpace size="sm" />
                <Result
                    className="save-pdf-component" 
                    img={<Icon type="check-circle" style={{ fill: '#21ba45', width: '60px', height: '60px' }} />}
                    title="Order Submmited!"
                    message= {"Your order id is: " +  this.props.orderId + ". Please wait for our staff to contact you."}
                />

                <WhiteSpace size="md" />
                <WingBlank size="md">
                    <Button className="greenButton" onClick={this.saveAsPdf}>Save as PDF</Button>
                </WingBlank>
            </WingBlank>
        )
    }
}

export default LastOrderPage;
