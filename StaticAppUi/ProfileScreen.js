// ProfileScreen.js
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// ---------- Mock Data ----------
const USER = {
  initials: 'MF',
  name: 'Mary Faith',
  role: 'UI/UX Designer',
  username: '@maryfaith.designs',
  bio: 'Designing clean digital experiences. Coffee-driven, detail-obsessed, always learning.',
  location: 'Calbayog City, Philippines',
  joined: 'Joined March 2023',
  stats: {
    posts: 128,
    followers: '12.4K',
    following: 342,
  },
};

const SKILLS = ['UI Design', 'Prototyping', 'Figma', 'Design Systems', 'Branding'];

const INFO_ROWS = [
  { label: 'Email', value: 'maryfaith@designs.co' },
  { label: 'Website', value: 'maryfaith.designs.co' },
  { label: 'Location', value: 'Calbayog City, PH' },
];

const ACTIVITY = [
  { id: '1', title: 'Published a new case study', time: '2 hours ago', tag: 'Work' },
  { id: '2', title: 'Updated profile information', time: 'Yesterday', tag: 'Account' },
  { id: '3', title: 'Added 3 skills to portfolio', time: '3 days ago', tag: 'Skills' },
  { id: '4', title: 'Received 12 new followers', time: '5 days ago', tag: 'Social' },
];

// ---------- Vintage Palette ----------
const C = {
  parchment: '#EFE5D3',
  cream: '#F8F1E3',
  card: '#FBF6EC',
  tan: '#E3D2B8',
  sepia: '#8B7355',
  khaki: '#C9B896',
  ink: '#3A2F26',
  cocoa: '#5A4A3A',
  muted: '#9C8B76',
  dark: '#241C14',
  gold: '#B08A4B',
};

// ---------- Component ----------
export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor={C.parchment} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.iconBtn}>
            <Text style={styles.iconText}>⋮</Text>
          </TouchableOpacity>
        </View>

        {/* Avatar Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarInitials}>{USER.initials}</Text>
          </View>
          <Text style={styles.name}>{USER.name}</Text>
          <Text style={styles.role}>{USER.role}</Text>
          <Text style={styles.username}>{USER.username}</Text>

          <View style={styles.locationRow}>
            <View style={styles.locationDot} />
            <Text style={styles.locationText}>{USER.location}</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsCard}>
          <StatItem label="Posts" value={USER.stats.posts} />
          <View style={styles.statDivider} />
          <StatItem label="Followers" value={USER.stats.followers} />
          <View style={styles.statDivider} />
          <StatItem label="Following" value={USER.stats.following} />
        </View>

        {/* Actions */}
        <View style={styles.actionsRow}>
          <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.btnPrimaryText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.btnSecondary]}>
            <Text style={styles.btnSecondaryText}>Message</Text>
          </TouchableOpacity>
        </View>

        {/* About */}
        <SectionTitle title="About" />
        <View style={styles.card}>
          <Text style={styles.bio}>{USER.bio}</Text>
          <View style={styles.metaDivider} />
          <Text style={styles.metaText}>{USER.joined}</Text>
        </View>

        {/* Details */}
        <SectionTitle title="Details" />
        <View style={styles.card}>
          {INFO_ROWS.map((row, index) => (
            <View key={row.label}>
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>{row.label}</Text>
                <Text style={styles.infoValue}>{row.value}</Text>
              </View>
              {index < INFO_ROWS.length - 1 && <View style={styles.rowDivider} />}
            </View>
          ))}
        </View>

        {/* Skills */}
        <SectionTitle title="Skills" />
        <View style={styles.skillsWrap}>
          {SKILLS.map((skill) => (
            <View key={skill} style={styles.chip}>
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
        </View>

        {/* Recent Activity */}
        <SectionTitle title="Recent Activity" />
        <View style={styles.card}>
          {ACTIVITY.map((item, index) => (
            <View key={item.id}>
              <View style={styles.activityRow}>
                <View style={styles.activityDot} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.activityTitle}>{item.title}</Text>
                  <View style={styles.activityMetaRow}>
                    <View style={styles.tagPill}>
                      <Text style={styles.tagText}>{item.tag}</Text>
                    </View>
                    <Text style={styles.activityTime}>{item.time}</Text>
                  </View>
                </View>
              </View>
              {index < ACTIVITY.length - 1 && <View style={styles.rowDivider} />}
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.footerText}>© 2026 Mary Faith</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------- Subcomponents ----------
const StatItem = ({ label, value }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const SectionTitle = ({ title }) => (
  <View style={styles.sectionHeader}>
    <View style={styles.sectionBar} />
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

// ---------- Styles ----------
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.parchment },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: { fontSize: 22, fontWeight: '800', color: C.ink },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: C.cream,
    borderWidth: 1,
    borderColor: C.khaki,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: { fontSize: 18, color: C.ink, fontWeight: '700' },

  profileCard: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    backgroundColor: C.card,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.khaki,
  },
  avatarCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: C.dark,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: C.tan,
  },
  avatarInitials: {
    fontSize: 34,
    fontWeight: '800',
    color: C.cream,
    letterSpacing: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: C.ink,
    marginTop: 14,
  },
  role: {
    fontSize: 13,
    color: C.sepia,
    fontWeight: '600',
    marginTop: 2,
  },
  username: {
    fontSize: 12,
    color: C.muted,
    marginTop: 4,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  locationDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.gold,
    marginRight: 6,
  },
  locationText: {
    fontSize: 12,
    color: C.cocoa,
  },

  statsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: C.card,
    marginHorizontal: 20,
    marginTop: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.khaki,
    paddingVertical: 16,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: { fontSize: 18, fontWeight: '800', color: C.ink },
  statLabel: { fontSize: 11, color: C.muted, marginTop: 2 },
  statDivider: { width: 1, height: 30, backgroundColor: C.khaki },

  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 14,
    gap: 10,
  },
  btn: {
    flex: 1,
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimary: { backgroundColor: C.dark },
  btnPrimaryText: { color: C.cream, fontWeight: '700', fontSize: 14 },
  btnSecondary: {
    backgroundColor: C.cream,
    borderWidth: 1,
    borderColor: C.sepia,
  },
  btnSecondaryText: { color: C.ink, fontWeight: '700', fontSize: 14 },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 10,
  },
  sectionBar: {
    width: 3,
    height: 14,
    backgroundColor: C.sepia,
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: C.ink,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },

  card: {
    backgroundColor: C.card,
    marginHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.khaki,
    padding: 16,
  },
  bio: { fontSize: 13, color: C.cocoa, lineHeight: 20 },
  metaDivider: { height: 1, backgroundColor: C.khaki, marginVertical: 12, opacity: 0.6 },
  metaText: { fontSize: 11, color: C.muted, fontStyle: 'italic' },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  infoLabel: { fontSize: 13, color: C.muted },
  infoValue: { fontSize: 13, color: C.ink, fontWeight: '600' },
  rowDivider: { height: 1, backgroundColor: C.khaki, opacity: 0.5 },

  skillsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: C.cream,
    borderWidth: 1,
    borderColor: C.sepia,
  },
  chipText: { fontSize: 12, color: C.ink, fontWeight: '600' },

  activityRow: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.gold,
    marginTop: 6,
    marginRight: 12,
  },
  activityTitle: { fontSize: 13, color: C.ink, fontWeight: '600' },
  activityMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    gap: 8,
  },
  tagPill: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: C.tan,
  },
  tagText: { fontSize: 10, color: C.cocoa, fontWeight: '600' },
  activityTime: { fontSize: 11, color: C.muted },

  footerText: {
    textAlign: 'center',
    fontSize: 11,
    color: C.khaki,
    marginTop: 30,
  },
});