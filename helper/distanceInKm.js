export default function getDistanceFromLatAddLng(lat1, lng1, lat2, lng2) {
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };
  let R = 6371; //Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1);
  let dLng = deg2rad(lng2 - lng1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c;
  return d;
}
