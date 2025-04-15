import { Jost, Oswald } from 'next/font/google'
import "/public/stylesheets/bootstrap.min.css"
import "/public/stylesheets/bootstrap.rtl.min.css"
import "/public/stylesheets/bootstrap-grid.min.css"
import "/public/stylesheets/bootstrap-reboot.min.css"
import "/public/stylesheets/bootstrap-utilities.rtl.min.css"
import "/public/stylesheets/bootstrap-utilities.min.css"
import "/public/stylesheets/bootstrap-reboot.rtl.min.css"
import "/public/stylesheets/bootstrap-grid.rtl.min.css"
import "/public/stylesheets/style.css"
import "/public/stylesheets/responsive.css"
import "/public/stylesheets/colors/color1.css"
import "/public/stylesheets/owl.carousel.css"
import "/public/stylesheets/animate.css"
import "/public/stylesheets/animate.min.css"
import "/public/stylesheets/swiper-bundle.min.css"
import "/public/stylesheets/magnific-popup.min.css"
import "/public/stylesheets/map.min.css"

const jost = Jost({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--jost',
	display: 'swap',
})
const oswald = Oswald({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: '--oswald',
	display: 'swap',
})
export const metadata = {
	title: 'Thunderbolts Development Center',
	description: 'Thunderbolts Development Center',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${jost.variable} ${oswald.variable} header-sticky`}>{children}</body>
		</html>
	)
}
