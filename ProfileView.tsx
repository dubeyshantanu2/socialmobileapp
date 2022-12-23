import { Profile } from "@lens-protocol/react-native-lens-ui-kit";

export default function ProfileView({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  return (
    <Profile
      profile={route.params.profile}
      onFollowingPress={(profile: { ownedBy: any }) => {
        console.log("PROFILE:::: ", profile);
        navigation.push("ViewFollowing", {
          ethereumAddress: profile.ownedBy,
        });
      }}
      onProfileImagePress={(publication: { profile: any }) => {
        navigation.push("ViewProfile", {
          profile: publication.profile,
        });
      }}
      onCommentPress={(publication: { mirrorOf: { id: any }; id: any }) => {
        const publicationId = publication.mirrorOf
          ? publication.mirrorOf.id
          : publication.id;
        navigation.push("ViewComments", {
          publicationId,
        });
      }}
    />
  );
}
