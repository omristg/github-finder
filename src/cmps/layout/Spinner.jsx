import spinner from '../../assets/img/spinner.gif'

export const Spinner = () => {

    return (
        <div className="">
            <div className="w-100 mt-20 ">
                <img src={spinner}
                    alt="loading..."
                    width={180}
                    className="mx-auto text-center" />
            </div>
        </div>
    )
}