import React from 'react'

const YTVideo = () => {
  return (
    <div className="container-fluid ytvideo text-center bg-black bg-opacity-10 pb-5 pt-0">
        <div className="row">
            <div className="col-12 pt-5">
                <h3>How it <span> work</span></h3>
                <iframe className='ytvid' src="https://www.youtube.com/embed/-V5QjGogoig" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>  
        </div>
    </div>
  )
}

export default YTVideo