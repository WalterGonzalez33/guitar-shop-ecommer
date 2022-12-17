import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="loading">
        <div className='container'>
            <div className="loading-container">
                <Spinner animation="grow" />
            </div>
        </div>
    </div>
  )
}

export default Loading