import { observable, configure } from "mobx"
import { Component } from "react"
import { unstable_batchedUpdates as rdBatched } from "remax"

if (!Component) throw new Error("mobx-react requires React to be available")
if (!observable) throw new Error("mobx-react requires mobx to be available")

if (typeof rdBatched === "function") configure({ reactionScheduler: rdBatched })

export {
    Observer,
    useObserver,
    useAsObservableSource,
    useLocalStore,
    isUsingStaticRendering,
    useStaticRendering
} from "mobx-react-lite"

export { observer } from "./observer"

export { Provider, MobXProviderContext } from "./Provider"
export { inject } from "./inject"
export { disposeOnUnmount } from "./disposeOnUnmount"
export { PropTypes } from "./propTypes"
