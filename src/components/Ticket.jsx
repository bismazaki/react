import React from 'react'
import '../App.css';

const Ticket = (Props) => {
    return (
        <div>
            <div class="ticket">
                <div class="ticket-header"><u>Movie Ticket</u> </div>
                <div class="ticket-details">
                    <div class="detail">
                        <span>Username:</span>
                        <span>{Props.a}</span>
                    </div>
                    <div class="detail">
                        <span>Movie:</span>
                        <span>{Props.b}</span>
                    </div>
                    <div class="detail">
                        <span>Ticket Type:</span>
                        <span>{Props.e}</span>
                    </div>
                    <div class="detail">
                        <span>Ticket Quantity</span>
                        <span>{Props.c}</span>
                    </div>
                    <div class="detail">
                        <span>Glasses Charges</span>
                        <span>{Props.d}</span>
                    </div>
                    <div class="detail">
                        <span>Price:</span>
                        <span>Rs: {Props.f}</span>
                    </div>
                </div>
                <div class="qr-code">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHTJtWp6VcM2bWGCNFnnwUoVFXwrdiXwF1cvS9EpYF4NDt4nDG3ttYBOqVN7Q4YrrK8g&usqp=CAU" alt="QR Code"/>
                </div>
                <div class="ticket-footer">Enjoy Your Movie!</div>
            </div>
        </div>
    )
}

export default Ticket
