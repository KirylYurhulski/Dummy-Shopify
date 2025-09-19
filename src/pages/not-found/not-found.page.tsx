import style from './not-found.module.css'

const NotFoundPage = () => {
  return (
    <div className={style.main}>
      <div className={style.fof}>
        <h1>404: Page Not Found</h1>
      </div>
    </div>
  )
}

export const Component = NotFoundPage