export default function RestaurantMap() {
  // Example location (Singapore – change as needed)
  const lat = 1.2868;
  const lng = 103.8523;

  const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  return (
    <div
      className="
        relative w-full overflow-hidden rounded-xl
        border border-gray-200 dark:border-gray-700
        h-[280px] sm:h-[460px] md:h-[550px] lg:h-[1000px]
      "
    >
      {/* Map iframe */}
      <iframe
        title="Restaurant location map"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=103.83%2C1.27%2C103.88%2C1.31&marker=${lat}%2C${lng}&layer=mapnik`}
        className="w-full h-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Overlay UI */}
      <div className="absolute top-3 right-3 z-10">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            rounded-full bg-white/95 backdrop-blur
            px-4 py-2 text-sm font-medium
            text-[#1E1E1E]
            shadow-lg
            hover:bg-gray-100
            transition
          "
        >
          📍 Open in Google Maps
        </a>
      </div>
    </div>
  );
}
