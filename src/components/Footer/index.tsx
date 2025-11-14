"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter, usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps"
import { useLenis } from "@/hooks/use-lenis"
import { useTranslation } from "@/context/LanguageContext"

declare global {
  interface Window {
    google?: typeof google
  }
}

// Custom SVG Components with corrected colors
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
)

type OfficeLocation = {
  id: string
  name: string
  address: string
  coordinates: [number, number]
  mapsUrl: string
}

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
const GOOGLE_PIN_PATH =
  "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 10.5A3.5 3.5 0 1115.5 9 3.5 3.5 0 0112 12.5z"

const parseLocationName = (name: string) => {
  const [region, city] = name.split("—").map((part) => part.trim())
  return {
    region: region || name,
    city: city || region || name,
  }
}

const FALLBACK_ZOOM_BOUNDS = { min: 0.8, max: 4.2 }

const officeLocations: OfficeLocation[] = [
  {
    id: "usa",
    name: "USA — New York",
    address: "225 West, 14 Penn Plaza, Suite 9-40, 34th Street, New York, NY 10122",
    coordinates: [-73.9916, 40.7508],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=225+W+34th+St,+New+York,+NY+10122",
  },
  {
    id: "canada",
    name: "Canada — Mississauga",
    address: "1065 Canadian Place Suite 201, Mississauga, Ontario, L4W 0C2",
    coordinates: [-79.628, 43.6307],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=1065+Canadian+Place+Suite+201,+Mississauga,+ON+L4W+0C2",
  },
  {
    id: "uk",
    name: "UK — Ilford",
    address: "559 High Road, Ilford, Essex IG1 1TZ • Tel: 0208 478 5599 • DX: 8904 Ilford",
    coordinates: [0.0692, 51.5587],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=559+High+Road,+Ilford,+IG1+1TZ",
  },
  {
    id: "dubai",
    name: "UAE — Ras Al Khaimah",
    address: "Gandhi Law and Business Associates, Villa 43, South Dath, Ras Al Khaimah • Mobile: +971 52 477 6774",
    coordinates: [55.9763, 25.6741],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Villa+43,+South+Dath,+Ras+Al+Khaimah",
  },
  {
    id: "hyderabad",
    name: "India — Hyderabad",
    address: "Flat No. 602, Mount Nasir Apartment, Saifabad, Hyderabad-500004",
    coordinates: [78.4691, 17.406],
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mount+Nasir+Apartment,+Saifabad,+Hyderabad+500004",
  },
]

export function Footer() {
  const { scrollTo } = useLenis();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslation();
  const [hoveredLocation, setHoveredLocation] = useState<OfficeLocation | null>(null)
  const [fallbackView, setFallbackView] = useState<{ coordinates: [number, number]; zoom: number }>({
    coordinates: [0, 15],
    zoom: 1.35,
  })
  const [selectedLocationId, setSelectedLocationId] = useState<string>(officeLocations[0]?.id ?? "")
  const [mapError, setMapError] = useState<string | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const shouldUseGoogleMap = Boolean(mapsApiKey)
  const displayedLocation =
    hoveredLocation ?? officeLocations.find((location) => location.id === selectedLocationId) ?? null
  const formattedDisplay = displayedLocation ? parseLocationName(displayedLocation.name) : null

  const openLocationInMaps = useCallback((mapsUrl: string) => {
    if (typeof window === "undefined") return
    window.open(mapsUrl, "_blank", "noopener,noreferrer")
  }, [])

  const handleLocationSelect = useCallback(
    (location: OfficeLocation, openDirections = false) => {
      setSelectedLocationId(location.id)
      setHoveredLocation(null)
      if (!shouldUseGoogleMap) {
        setFallbackView({
          coordinates: location.coordinates,
          zoom: Math.min(3.2, FALLBACK_ZOOM_BOUNDS.max),
        })
      }
      if (openDirections) {
        openLocationInMaps(location.mapsUrl)
      }
    },
    [openLocationInMaps, shouldUseGoogleMap]
  )

  const initializeMap = useCallback(() => {
    if (typeof window === "undefined") return
    if (!window.google?.maps) return
    if (!mapContainerRef.current || mapInstanceRef.current) return

    const googleMaps = window.google.maps
    const map = new googleMaps.Map(mapContainerRef.current, {
      zoom: 2.5,
      minZoom: 1.5,
      center: { lat: 20, lng: 0 },
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
      zoomControl: true,
      backgroundColor: "#eef2ff",
      styles: [
        {
          featureType: "all",
          elementType: "geometry",
          stylers: [{ color: "#eef2ff" }],
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [{ color: "#dbeafe" }],
        },
        {
          featureType: "landscape",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "administrative",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    })

    markersRef.current = officeLocations.map((location) => {
      const [lng, lat] = location.coordinates
      const marker = new googleMaps.Marker({
        position: { lat, lng },
        map,
        title: location.name,
        icon: {
          path: GOOGLE_PIN_PATH,
          fillColor: "#EA4335",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 1.5,
          scale: 1,
          anchor: new googleMaps.Point(12, 24),
        },
      })

      marker.addListener("mouseover", () => setHoveredLocation(location))
      marker.addListener("mouseout", () => setHoveredLocation(null))
      marker.addListener("click", () => {
        handleLocationSelect(location, true)
      })

      return marker
    })

    mapInstanceRef.current = map
  }, [handleLocationSelect])

  useEffect(() => {
    if (!shouldUseGoogleMap || typeof window === "undefined") {
      return
    }

    const existingScript = document.getElementById("ailinc-google-maps-script") as HTMLScriptElement | null
    const handleLoad = () => {
      initializeMap()
      setMapError(null)
    }
    const handleError = () => {
      setMapError("Unable to load Google Maps right now. Please try again later.")
    }

    if (window.google?.maps) {
      handleLoad()
      return
    }

    if (existingScript) {
      existingScript.addEventListener("load", handleLoad)
      existingScript.addEventListener("error", handleError)
      return () => {
        existingScript.removeEventListener("load", handleLoad)
        existingScript.removeEventListener("error", handleError)
      }
    }

    const script = document.createElement("script")
    script.id = "ailinc-google-maps-script"
    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsApiKey}`
    script.async = true
    script.defer = true
    script.addEventListener("load", handleLoad)
    script.addEventListener("error", handleError)
    document.head.appendChild(script)

    return () => {
      script.removeEventListener("load", handleLoad)
      script.removeEventListener("error", handleError)
    }
  }, [initializeMap, mapsApiKey, shouldUseGoogleMap])

  useEffect(() => {
    if (!shouldUseGoogleMap || !mapInstanceRef.current) return
    const focusedLocation = officeLocations.find((location) => location.id === selectedLocationId)
    if (!focusedLocation) return
    const [lng, lat] = focusedLocation.coordinates
    mapInstanceRef.current.panTo({ lat, lng })
    const currentZoom = mapInstanceRef.current.getZoom() ?? 2
    if (currentZoom < 3.2) {
      mapInstanceRef.current.setZoom(3.2)
    }
  }, [selectedLocationId, shouldUseGoogleMap])

  // Function to handle navigation to sections
  const navigateToSection = (sectionId: string, duration: number = 1.5) => {
    if (pathname === "/") {
      scrollTo(`#${sectionId}`, { duration });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <footer className="bg-white border-t border-gray-200/50 py-16 sm:py-20 relative overflow-hidden">
      {/* Light Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/40 to-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section with Logo and Contact */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 pb-12 border-b border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Logo and Description */}
            <motion.div variants={item} className="space-y-6">
              <Link href="/">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t("AI Linc")}
              </div>
              </Link>
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                {t("Bridging the gap between AI talent and opportunity. We assess, elevate, and deploy professionals into high-impact AI roles.")}
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={item} className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("Get in Touch")}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <MapPinIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t("India Office")}</p>
                    <p className="text-gray-600 text-sm">
                      {t("8-2-418, Meenakshi House, Rd No 7, Banjara Hills, Hyderabad, 500034")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <a href="tel:+917868055111" className="text-gray-700 hover:text-blue-600 transition-colors">
                    +91 7868-055111
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <a href="mailto:contact@ailinc.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                    contact@ailinc.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-12"
        >
          {/* About AI Linc */}
          <motion.div variants={item} className="lg:col-span-3 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("About AI Linc")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about-us#who-we-are"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  passHref
                >
                  {t("Who We Are")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#what-we-do"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  passHref
                >
                  {t("What We Do")}
                </Link>
              </li>
              {/* <li>
                <button
                  onClick={() => navigateToSection("how-we-do-it")}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-left cursor-pointer"
                  type="button"
                >
                  How We Do It
                </button>
              </li> */}
              <li>
                <button
                  onClick={() => navigateToSection("success-stories")}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-left cursor-pointer"
                  type="button"
                >
                  {t("Success Stories")}
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Global Map Section */}
          <motion.div variants={item} className="lg:col-span-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t("Find Us")}</h3>
                <p className="text-sm text-gray-500">
                  {t("Tap a marker to open the location in Google Maps.")}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {t("Global Presence")}
              </span>
            </div>
            <div className="relative h-[360px] rounded-2xl border border-gray-200 bg-slate-50/80 shadow-lg overflow-hidden">
              <div
                className="pointer-events-none absolute left-5 top-5 z-10 max-w-sm rounded-3xl bg-white/90 p-5 shadow-xl ring-1 ring-white/70 backdrop-blur"
                aria-live="polite"
              >
                {displayedLocation ? (
                  <>
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-indigo-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                      {formattedDisplay?.region}
                    </div>
                    <p className="mt-3 text-lg font-semibold text-gray-900">{formattedDisplay?.city}</p>
                    <p className="mt-1 text-sm text-gray-700 leading-relaxed">{displayedLocation.address}</p>
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gray-400">
                      {t("Hover over pins or use the chips below to preview locations.")}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">{t("Global Presence")}</p>
                    <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                      Hover or tap a pin to preview our office details anywhere in the world.
                    </p>
                  </>
                )}
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-100/20" />
              {shouldUseGoogleMap ? (
                <>
                  <div
                    ref={mapContainerRef}
                    className="h-full w-full"
                    role="region"
                    aria-label={t("Global Google Map showing AI Linc locations")}
                  />
                  {mapError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95 px-6 text-center">
                      <p className="text-sm font-semibold text-gray-900">{mapError}</p>
                      <p className="mt-2 text-sm text-gray-600">
                        {mapsApiKey
                          ? "Please refresh the page or try again later."
                          : "Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable this map."}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <div className="h-full w-full" role="img" aria-label={t("Fallback world map showing AI Linc locations")}>
                  <ComposableMap projectionConfig={{ scale: 170 }}>
                    <ZoomableGroup
                      zoom={fallbackView.zoom}
                      center={fallbackView.coordinates}
                      minZoom={FALLBACK_ZOOM_BOUNDS.min}
                      maxZoom={FALLBACK_ZOOM_BOUNDS.max}
                      translateExtent={[
                        [-1000, -400],
                        [1000, 600],
                      ]}
                      onMoveEnd={({ coordinates, zoom }) =>
                        setFallbackView({
                          coordinates: coordinates as [number, number],
                          zoom,
                        })
                      }
                    >
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill="#f3f4f6"
                              stroke="#c7d2fe"
                              strokeWidth={0.4}
                              style={{
                                default: { outline: "none" },
                                hover: { outline: "none" },
                                pressed: { outline: "none" },
                              }}
                            />
                          ))
                        }
                      </Geographies>
                      {officeLocations.map((location) => {
                        const isActive = displayedLocation?.id === location.id
                        return (
                          <Marker key={location.id} coordinates={location.coordinates}>
                            <motion.g
                              role="button"
                              tabIndex={0}
                              aria-label={`${location.name} — ${location.address}`}
                              initial={{ scale: 0.8, opacity: 0 }}
                              animate={{
                                scale: isActive ? 1.1 : 1,
                                opacity: 1,
                              }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                              onMouseEnter={() => setHoveredLocation(location)}
                              onMouseLeave={() => setHoveredLocation(null)}
                              onFocus={() => setHoveredLocation(location)}
                              onBlur={() => setHoveredLocation(null)}
                              onClick={() => handleLocationSelect(location, true)}
                              onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                  event.preventDefault()
                                  handleLocationSelect(location, true)
                                }
                              }}
                              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            >
                              {isActive && (
                                <motion.circle
                                  r={12}
                                  stroke="rgba(234,67,53,0.45)"
                                  strokeWidth={2}
                                  fill="transparent"
                                  animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                />
                              )}
                              <path
                                d={GOOGLE_PIN_PATH}
                                fill="#EA4335"
                                stroke="#ffffff"
                                strokeWidth={1}
                                transform="translate(-12,-24) scale(0.8)"
                              />
                              <circle r={2.2} fill="#ffffff" />
                            </motion.g>
                          </Marker>
                        )
                      })}
                    </ZoomableGroup>
                  </ComposableMap>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {officeLocations.map((location) => {
                const isActive = selectedLocationId === location.id
                return (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => handleLocationSelect(location)}
                    className={`group inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-indigo-500 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "border-gray-200 bg-white text-gray-700 hover:border-indigo-200 hover:bg-indigo-50"
                    }`}
                  >
                    <span
                      className={`mr-2 h-2 w-2 rounded-full ${
                        isActive ? "bg-white" : "bg-indigo-500/70 group-hover:bg-indigo-600"
                      }`}
                    />
                    {location.name}
                  </button>
                )
              })}
            </div>
          </motion.div>
          {/* Newsletter & Social */}
          <motion.div variants={item} className="lg:col-span-3 space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t("Stay Connected")}</h3>

            {/* Social Links */}
            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/company/ai-linc772/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start p-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 group"
                aria-label={t("Visit AI Linc on LinkedIn")}
              >
                <LinkedInIcon />
                <span className="ml-3">{t("LinkedIn")}</span>
              </a>
              <a
                href="https://www.youtube.com/@AILinc772"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start p-3 rounded-lg hover:bg-red-50 hover:text-red-600 transition-all duration-300 group"
                aria-label={t("Visit AI Linc on YouTube")}
              >
                <YouTubeIcon />
                <span className="ml-3">{t("YouTube")}</span>
              </a>
              <a
                href="https://www.instagram.com/ai_lincc/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-start p-3 rounded-lg hover:bg-pink-50 hover:text-pink-600 transition-all duration-300 group"
                aria-label={t("Visit AI Linc on Instagram")}
              >
                <InstagramIcon />
                <span className="ml-3">{t("Instagram")}</span>
              </a>
            </div>


            {/* Newsletter */}
            <div className="mt-8">
              <div className="flex items-center mb-3 text-blue-600">
                <SendIcon />
                <span className="ml-2 font-semibold text-gray-900">{t("Newsletter")}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t("Get the latest AI insights and opportunities")}
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t("Enter your email")}
                  required
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
                  aria-label={t("Email address for newsletter subscription")}
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {t("Subscribe")}
                </button>
              </form>
            </div>
          </motion.div>




        </motion.div>



        {/* Separator */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Bottom Footer */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center text-gray-600 text-sm space-y-4 lg:space-y-0"
        >
          <p>&copy; {new Date().getFullYear()} AI LINC. {t("All rights reserved.")}</p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-blue-600 transition-colors">{t("Terms")}</Link>
            <Link href="/privacy" className="hover:text-blue-600 transition-colors">{t("Privacy")}</Link>
            <Link href="/refund" className="hover:text-blue-600 transition-colors">{t("Refunds")}</Link>

          </div>
        </motion.div>
      </div>
    </footer>
  )
}
