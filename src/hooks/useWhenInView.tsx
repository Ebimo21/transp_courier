import { useInView } from 'react-intersection-observer';

const useWhenInView = () => {
    const [lead, leadView] = useInView({triggerOnce: true});
    const [p, pView] = useInView({delay: 1200, triggerOnce: true});
    const [sub, subView] = useInView({delay: 400, triggerOnce: true});
    const [cardOne, cardOneView] = useInView({triggerOnce: true, delay: 400})
    const [cardTwo, cardTwoView] = useInView({triggerOnce: true, delay: 600})
    const [cardThree, cardThreeView] = useInView({triggerOnce: true, delay: 800})
    const [cardFour, cardFourView] = useInView({triggerOnce: true, delay: 1000})
    const [img, imgView] = useInView({delay: 400, triggerOnce: true});
    const [btn, btnView] = useInView({delay: 400, triggerOnce: true})
    const [points, pointsView] = useInView({delay: 600, triggerOnce: true});
    const [itemOne, itemOneView] = useInView({triggerOnce: true, delay: 400})
    const [itemTwo, itemTwoView] = useInView({triggerOnce: true, delay: 600})
    const [itemThree, itemThreeView] = useInView({triggerOnce: true, delay: 800})
    const [itemFour, itemFourView] = useInView({triggerOnce: true, delay: 1000})
  return {lead, leadView, p, pView, sub, subView, cardOne, cardOneView, cardTwo, cardTwoView, cardThree, cardThreeView, cardFour, cardFourView, itemOne, itemOneView, itemTwo, itemTwoView, itemThree, itemThreeView, itemFour, itemFourView, img, imgView, btn, btnView, points, pointsView}
}

export default useWhenInView