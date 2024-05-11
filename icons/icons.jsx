export function PhoneSvg(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
  );
}

export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M21.743 12.331l-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 003 14h2v7a1 1 0 001 1h12a1 1 0 001-1v-7h2a.998.998 0 00.743-1.669zM12 16a3 3 0 110-6 3 3 0 010 6z" />
    </svg>
  );
}

export function LocationSvg(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function RentSvg(props) {
  return <img {...props} src="/rent.png" alt="rentpng" />;
}

export function FloorSvg(props) {
  return <img {...props} src="/floor.png" alt="rentpng" />;
}

export function RoomsSvg(props) {
  return <img {...props} src="/rooms.png" alt="rentpng" />;
}

export function VelSvg(props) {
  return <img {...props} src="/vel.png" alt="rentpng" />;
}
