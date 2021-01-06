export default function Home(props) { 
    return (
        <div>
            [Home page]
            <br />{props.text}
        </div>
    )
}

export async function getStaticProps() {
  return {
    props: {
        text: "test data"
    }
  }
}