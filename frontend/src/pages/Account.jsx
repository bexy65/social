function Account() {
    return (
        <>
            <div className="max-w-xl mx-auto mt-4 p-6">
                <form  className="flex flex-col gap-3 text-left mt-2">
                    <div className='flex flex-col md:flex-row'>
                        <div className="border w-full flex flex-col p-2">
                            <label> Profile image: </label>
                            <input type="file" name="image" id="image" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="border md:w-1/2 flex flex-col p-2 mb-3 md:mb-0">
                            <label> First Name</label>
                            <input type="text"  className="border"/>
                        </div>
                        <div className="border md:w-1/2 flex flex-col p-2">
                            <label> First Name</label>
                            <input type="text"  className="border"/>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row'>
                        <div className="border w-full flex flex-col p-2">
                            <label> Email: </label>
                            <input type="email"  className="border"/>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Account;