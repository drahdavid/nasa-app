import { useState } from "react";

import Image from "next/image";

export const Photo = ({ data }) => {
	return (
		<Image
			alt={`Photo ${data.rover.name} - ${data.rover.landing_date} - ${data.id}`}
			src={data.img_src}
			width={500}
			height={500}
			placeholder="blur"
			blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN0qD/qAwAEXQHSmgqrmgAAAABJRU5ErkJggg==
            "
		/>
	);
};
