/* eslint-disable @next/next/no-img-element */
"use client"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import React, { useState } from "react"
import Modal from "react-modal"
import { FaChevronLeft, FaChevronRight, FaPlayCircle, FaTimes } from "react-icons/fa"

const galleryItems = [
  { type: "image", src: "/assets/gallery/1.jpg", alt: "Gallery Image 1" },
  { type: "image", src: "/assets/gallery/2.jpg", alt: "Gallery Image 2" },
  { type: "image", src: "/assets/gallery/3.jpg", alt: "Gallery Image 3" },
  { type: "image", src: "/assets/gallery/4.jpg", alt: "Gallery Image 4" },
  { type: "image", src: "/assets/gallery/5.jpg", alt: "Gallery Image 5" },
  { type: "video", src: "/assets/gallery/6.mp4", alt: "Gallery Video 1" },
  { type: "image", src: "/assets/gallery/7.jpg", alt: "Gallery Image 7" },
  { type: "video", src: "/assets/gallery/8.mov", alt: "Gallery Video 2" },
  { type: "image", src: "/assets/gallery/9.jpg", alt: "Gallery Image 9" },
  { type: "image", src: "/assets/gallery/10.jpeg", alt: "Gallery Image 10" },
]

export default function GallerySlider() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 15
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 }
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 15 }
      }
    }
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<typeof galleryItems[0] | null>(null)

  const openModal = (item: typeof galleryItems[0]) => {
    setActiveItem(item)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setActiveItem(null)
  }

  const slidePrev = () => instanceRef.current?.prev()
  const slideNext = () => instanceRef.current?.next()

  return (
    <div className="w-full px-4 relative">
      {/* Arrows */}
      <button
        onClick={slidePrev}
        className="absolute top-1/2 left-0 -translate-y-1/2 z-20 bg-primary bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={slideNext}
        className="absolute top-1/2 right-0 -translate-y-1/2 z-20 bg-primary bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 transition"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider w-full">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide cursor-pointer bg-gray-100 p-2 rounded shadow"
            onClick={() => openModal(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-[250px] object-cover rounded"
              />
            ) : (
              <div className="relative w-full h-[250px] rounded overflow-hidden">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaPlayCircle className="text-white text-5xl opacity-80 hover:opacity-100 transition" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-[9999]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-[9998]"
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 text-white text-3xl font-bold z-[10000] hover:scale-110 transition"
        >
          <FaTimes />
        </button>
        {activeItem?.type === "image" ? (
          <img
            src={activeItem.src}
            alt={activeItem.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        ) : (
          <video
            src={activeItem?.src}
            controls
            autoPlay
            className="max-h-[90vh] max-w-[90vw]"
          />
        )}
      </Modal>
    </div>
  )
}
