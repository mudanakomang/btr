export const splitStringByNewLine =(str, type=null) => {
    return str.split('\n').map((item, index) => {
      if (type === null) {
        return (<><span key={index}>{item}</span><br></br></>)
      }else{
        const el = `<${type} key=${index} >${item}</${type}>`
        return <div key={index} className="pb-1" dangerouslySetInnerHTML={{__html: el}}></div>
      }
    }
    )
  }