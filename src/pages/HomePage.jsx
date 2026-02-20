function HomePage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 md:px-8 py-8 font-mono">
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 md:p-8 w-full max-w-4xl min-h-screen">
                
                {/* Profile */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-left gap-4">
                    <img src="./images/Cara.webp" alt="profile" className="w-32 h-32 md:w-55 md:h-55 object-cover border-4 border-pink-300 rounded-full"/>
                    <h2 className="text-3xl md:text-4xl text-gray-600 font-bold">cara / gon !</h2>
                </div>

                {/* Pokemons */}
                <div className="flex flex-row items-center mt-4 gap-0 ml-2">
                    <img src="./gif/froslas.gif" alt="froslas" className="w-15 h-15 object-cover"/>
                    <img src="./gif/sylveon.gif" alt="sylveon" className="w-15 h-15 object-cover"/>
                    <img src="./gif/dragonite.gif" alt="dragonite" className="w-15 h-15 object-cover"/>
                </div>

                {/* Bio + Cards */}
                <div className="flex flex-col md:flex-row items-start mt-4 gap-6">
                    <div className="w-full md:w-auto">
                        <p className="text-lg text-gray-600 text-left">
                            she/her + 21 + transgirl &lt;3 <br />
                            heyo am cara <br />
                            am a sweetheart <br />
                            def not a bully <br />
                            making friends is hard <br />
                            dni if you're - homophobic/transphobic, insensitive, ableist, misogynist, ignorant and has superiority complex
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 w-full md:w-auto">
                        <div className="rounded-2xl border-2 border-pink-300">
                            <div className="rounded-t-2xl bg-pink-300 px-3 py-1">
                                <h2 className="text-2xl">buddies ♡</h2>
                            </div>
                            <p className="text-lg text-gray-600 text-justify p-2">
                                ate jireh, andre, heart, chunky, alexandra, yannah, tenet, meeo, 
                                ate tricia, philip, lyndon, toni &lt;3 eliyah, nadja, abigail, sophia, ate richelle, dm, roblox fam (carriane, petal, icy, clint)
                            </p>
                        </div>
                        <div className="rounded-2xl border-2 border-pink-300">
                            <div className="rounded-t-2xl bg-pink-300 px-3 py-1">
                                <h2 className="text-2xl">૮ ・ﻌ・ა +</h2>
                            </div>
                            <p className="text-lg text-gray-600 text-justify p-2">
                                i love bauhaus + the sisters of mercy & i also love listening to any heavy metal + girly girl music, i play valorant, idv, 
                                stardew valley & animal crossing + minecraft and obvi i love pink
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-2 gap-4">
                    {/* Bottom card */}
                    <div className="mt-3 rounded-2xl border-3 border-pink-300">
                        <p className="text-lg text-gray-600 text-justify p-3">
                            i like to draw and express my feelings through art both digitally and traditionally (colorpencils/watercolors), 
                            but most of the time i jus bedrot, i like to stream & play video games. i parent one holland fuzzy lop + lionhead (they're ded). 
                            i have a deep admiration for anything artsy or strange. if u'd like to get to know me further, i hope we'll get along ଘ(੭*ˊᵕˋ)੭
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-4">
                        <div className="mt-3 rounded-2xl border-2 border-pink-300">
                            <div className="rounded-2xl border-2 border-pink-300">
                                <div className="rounded-t-2xl bg-pink-200 px-3 py-1">
                                    <h2 className="text-2xl">likes</h2>
                                </div>
                                <p className="text-lg text-gray-600 text-justify p-2">
                                    pokemon, gossip, facial piercings, lip oils, nails, carnivals, matcha, hanging out w/ my besties
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 rounded-2xl border-2 border-pink-300">
                            <div className="rounded-2xl border-2 border-pink-300">
                                <div className="rounded-t-2xl bg-pink-200 px-3 py-1">
                                    <h2 className="text-2xl">dislikes</h2>
                                </div>
                                <p className="text-lg text-gray-600 text-justify p-2">
                                    math, being left out, my dad, anti-depressants, being sad, hanging out w/ me out of pity
                                </p>
                            </div>
                        </div>
                        
                    </div>

                </div>
                

            </div>
        </div>
    );
}

export default HomePage;