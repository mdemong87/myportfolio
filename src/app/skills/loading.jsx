import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function loading() {
    return (
        <div>


            <Skeleton />
            <Skeleton count={5} />

        </div>
    )
}
