import { 
  View, Text, TouchableOpacity, ActivityIndicator
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './nearbyjobs.style';
import { COLORS } from '../../../constants';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch
  ('search', {
    query: 'React developer',
    num_pages: 1
  });

  return (
    <View style={styles.container}> // div containing the nearby jobs
      <View style={styles.header}> // div containing the header of the nearby jobs
        <Text style={styles.headerTitle}>Nearby jobs</Text> // text displaying the title of the nearby jobs
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text> // text displaying the button to show all nearby jobs
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs