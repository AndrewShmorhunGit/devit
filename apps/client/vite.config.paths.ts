import path from "path";

export const alias = {
  "@": path.resolve(__dirname, "./src"),
  "@components": path.resolve(__dirname, "./src/components"),
  "@pages": path.resolve(__dirname, "./src/pages"),
  "@styles": path.resolve(__dirname, "./src/styles"),
  "@svgs": path.resolve(__dirname, "./src/assets/icons/svgs"),
  "@assets": path.resolve(__dirname, "./src/assets"),
  "@utils": path.resolve(__dirname, "./src/utils"),
  "@providers": path.resolve(__dirname, "./src/providers"),
  "@store": path.resolve(__dirname, "./src/store"),
  "@api": path.resolve(__dirname, "./src/api"),
};

export const build = {
  outDir: path.resolve(__dirname, "./dist"),
  chunkSizeWarningLimit: 1300,
  rollupOptions: {
    output: {
      manualChunks(id: string) {
        if (id.includes("node_modules")) {
          return "vendor";
        }
      },
    },
  },
};
