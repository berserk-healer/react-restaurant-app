import './index.scss'

const Order = () => {


    return (

        <section className='wrapper'>
            <h3 className='sub-heading'>order now</h3>
            <h1 className='heading'>Free and fast</h1>

            <form>
                <div className='input-box'>
                    <div className='input'>
                        <span>your name</span>
                        <input type="text" placeholder='enter your name' />
                    </div>
                    <div className='input'>
                        <span>your number</span>
                        <input type="text" placeholder='enter your number' />
                    </div>
                </div>
                <div className='input-box'>
                    <div className='input'>
                        <span>your email</span>
                        <input type="text" placeholder='enter your email' />
                    </div>
                    <div className='input'>
                        <span>date and time</span>
                        <input type="datetime-local" />
                    </div>
                </div>
                <div className='input-box'>
                    <div className='input'>
                        <span>your address</span>
                        <textarea name='address' placeholder='enter your address' />
                    </div>
                    <div className='input'>
                        <span>message</span>
                        <textarea name='message' placeholder='message' />
                    </div>
                </div>
                <a href='#/order-success' className='btn'>Order now</a>
            </form>
        </section>
    )
}

export default Order