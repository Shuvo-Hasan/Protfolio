#!/bin/bash
# This script creates SVG placeholder images

create_svg() {
  local filename=$1
  local title=$2
  local color1=$3
  local color2=$4
  local icon=$5

  cat > "/home/claude/shuvo-hasan-site/public/images/${filename}.svg" << SVG
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480" width="800" height="480">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="480" fill="url(#bg)"/>
  <rect width="800" height="480" fill="url(#grid)"/>
  <circle cx="650" cy="80" r="160" fill="rgba(255,255,255,0.05)"/>
  <circle cx="100" cy="400" r="120" fill="rgba(255,255,255,0.04)"/>
  <text x="400" y="200" font-family="Georgia,serif" font-size="80" fill="rgba(255,255,255,0.15)" text-anchor="middle">${icon}</text>
  <text x="400" y="290" font-family="Georgia,serif" font-size="28" font-weight="bold" fill="rgba(255,255,255,0.9)" text-anchor="middle">${title}</text>
  <rect x="340" y="310" width="120" height="3" fill="rgba(200,151,58,0.8)" rx="2"/>
</svg>
SVG
}

create_svg "research-inverse" "Inverse Problems" "#1a3a2a" "#2d6147" "∇"
create_svg "research-datascience" "Data Science" "#1a2a3a" "#2d4a6b" "📊"
create_svg "research-opensource" "Open Source" "#2a1a3a" "#4a2d6b" "⚙"
create_svg "research-remote" "Remote Sensing" "#1a3a30" "#2d6b5a" "🛰"
create_svg "research-education" "Science Education" "#3a2a1a" "#6b4a2d" "📚"
create_svg "oss-dataforge" "DataForge" "#1a2a3a" "#153050" "⚡"
create_svg "oss-geoviz" "GeoViz" "#1a3a25" "#153520" "🌏"
create_svg "oss-invkit" "InvKit" "#2a1a3a" "#251540" "🔄"
create_svg "oss-sciedu" "SciEdu" "#3a2a10" "#503510" "🎓"
create_svg "oss-opensurvey" "OpenSurvey BD" "#1a3a35" "#103530" "🗺"
create_svg "oss-repcheck" "RepCheck" "#1a2535" "#102535" "✓"
create_svg "profile-hero" "Shuvo Hasan" "#1a3a2a" "#2d6147" "SH"

