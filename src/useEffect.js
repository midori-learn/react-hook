/* 
    side effects la gi? - tac dong chay ben ngoai 
    * call api, get data // ko can clean up
    * tuong tac voi dom // ko can clean up
    * subscriptions // can clean up
    * setTimeou, setInterval // can clean up


    useEffect:
    * duoc thuc thi sau moi lan render

    useEffect(callback, dependencies)

    useEffect(
        () => {
            // do your side effect here...

            return (
                // clean up here...
                // exeuted before the next render or unmount

            )
        }, []
    )

    mounting:
    - rendering 
    - run useEffect()

    updating:
    - rendering
    - run 'useEffect() cleanup' neu dependences thay doi
    - run 'useEffect()' neu dependencies thay doi

    unmountng:
    - run 'useEffect() cleanup'


    case 1:
        useEffect( () => {
            // every
            // no dependencies defined
            // always execute after every render

            return () => {
                // execute before the next effect or unmount
            }
        })

    case 2:
        useEffect( () => {
            // once
            // empty dependencies
            // only execute once after the first render

            render () => {
                // execute once when unmount
                // ~ will unmount in life cycle
            }

        }, [])
    
    case 3:
        useEffect(() => {
            // on demand - theo yeu cau
            // has dependencies 
            // only execute after the first render or filters state change

            return() => {

            }
        }, [filter])

    other: 

        useEffect(() => {
            console.log('component did mount');

            return () => {
                console.log('component will unmount');
            }
        }, []) // chu y chi chay mot lan 
*/