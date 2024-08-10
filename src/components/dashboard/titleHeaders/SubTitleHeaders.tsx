import BackButton from "../../BackButton"


const SubTitleHeaders = ({pageName}: {pageName: string}) => {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto mb-8">
      <div className="contaier flex items-center">
        <div className="h-6  w-2 bg-standardBlue mr-2 md:mr-3 md:h-9"></div>
        <h2 className="text-xl text-darkerTrans font-bold md:text-3xl">
        {pageName}
        </h2>
      </div>
      <BackButton/>
    </div>
  )
}

export default SubTitleHeaders