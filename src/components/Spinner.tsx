import Cliploader from 'react-spinners/ClipLoader'


type SpinnerProp = {
    loading: boolean
}

const Spinner = ({loading}: SpinnerProp) => {
    const override = {
        display: 'block',
        margin: '100px auto'
    }

  return (
    <Cliploader 
        color='#4338ca'
        loading={loading}
        size={150}
        cssOverride={override}
     />
  )
}


export default Spinner