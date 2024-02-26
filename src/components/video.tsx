import Player from 'react-player'
import { useAppSelector } from '../store'
export function Video() {
  const video = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleIndex } = state.player
    const currentLesson =
      state.player.course.modules[currentModuleIndex].lessons[
        currentLessonIndex
      ]
    return currentLesson
  })
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <Player
        width="100%"
        height="100%"
        controls={true}
        url={`https://www.youtube.com/watch?v=${video.id}`}
      />
    </div>
  )
}
