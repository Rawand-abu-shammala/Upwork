import SavedJobs from 'components/SavedJobs'
import Tabs from 'components/Tabs'
import IJob from 'types/Job'
import BestMatches from './sections/BestMatches'
import MostRecent from './sections/MostRecent'

export interface IProps {
    onJobClick: (jobData: IJob) => void
}

const JobsTabs = ({ onJobClick }: IProps) => {
    return (
        <Tabs
            tabs={[
                { title: "Best Matches", content: <BestMatches onJobClick={onJobClick} /> },
                { title: "most recent", content: <MostRecent onJobClick={onJobClick} /> },
                { title: `Saved Jobs`, content: <SavedJobs onJobClick={onJobClick} /> },
            ]}
        />
    )
}

export default JobsTabs