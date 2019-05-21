import React from 'react'
import Loader from 'react-loader-spinner'
export default function Withloading(List) {
    return (
        function WihLoadingComponent({isloading}) {
            if (isloading) return (<List />);
            else 
            return <div className="spiner"><Loader 
            type="Plane"
            color="#00BFFF"
            height="100"	
            width="100" /></div>
          }
    )
}
