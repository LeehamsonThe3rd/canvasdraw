interface RGB {
    R: number;
    G: number;
    B: number;
}

interface RGBA {
    R: number;
    G: number;
    B: number;
    A: number;
}

type ParentType = GuiObject | MeshPart | Decal | Texture

/*declare enum Fonts {
    "3x6" = "3x6",
    Atari = "Atari",
    Codepage = "Codepage",
    CodepageLarge = "CodepageLarge",
    GrandCD = "GrandCD",
    Monogram = "Monogram",
    Round = "Round",
}

declare enum BlendingModes {
    Normal = 0,
    Replace = 1
}*/

interface ImageData {
    //props
    readonly Width: number;
    readonly Height: number;
    readonly ImageResolution: Vector2;
    readonly ImageBuffer: buffer;

    //set
    SetBuffer(PixelBuffer: buffer): void;
    SetPixel(X: number, Y: number, Color3: Color3, Alpha: number): void;
    SetRGB(X: number, Y: number, R: number, G: number, B: number): void;
	SetRGBA(X: number, Y: number, R: number, G: number, B: number, A: number): void;
    SetAlpha(X: number, Y: number, Alpha: number): void;
	SetU32(X: number, Y: number, ColourU32: number): void;

    //get
    GetBuffer(): buffer;
    GetPixel(Point: Vector2): Color3;
    GetPixelXY(X: number, Y: number): Color3;
    GetRGB(X: number, Y: number): RGB;
    GetRGBA(X: number, Y: number): RGBA;
    GetAlpha(X: number, Y: number): number;
    GetU32(X: number, Y: number): number;

    //other
    Tint(Colour: Color3, T: number): void;
    TintRGB(R: number, G: number, B: number, T: number): void;
}

interface CanvasDraw {
    //props
    AutoRender: boolean;
    AutoRenderFpsLimt: number;
    AlphaBlendingMode: string;
    OutputWarnings: boolean;
    GridTransparency: number;
    EditableImage: EditableImage;
    CanvasColour: Color3;
    Resolution: Vector2;
    CurrentResX: number;
    CurrentResY: number;

    //set
    SetBuffer(PixelBuffer: buffer): void;
    Fill(Color: Color3, Alpha: number): void;
    Clear(): void;
    FloodFill(Point: Vector2, Colour: Color3, Alpha?: number): void;
    SetRGB(X: number, Y: number, R: number, G: number, B: number): void;
	SetRGBA(X: number, Y: number, R: number, G: number, B: number, A: number): void;
	SetU32(X: number, Y: number, ColourU32: number): void;
	SetAlpha(X: number, Y: number, Alpha: number): void;
	SetPixel(X: number, Y: number, Color3: Color3): void;
    DrawLine(PointA: Vector2, PointB: Vector2, Colour: Color3, Thickness?: number, RoundedCaps?: boolean): void;
    DrawCircle(Point: Vector2, Radius: number, Colour: Color3, Alpha?: number, Fill?: boolean): void;
    DrawRectangle(PointA: Vector2, PointB: Vector2, Colour: Color3, Alpha?: number, Fill?: boolean): void;
    DrawTriangle(PointA: Vector2, PointB: Vector2, PointC: Vector2, Colour: Color3, Fill?: boolean): void;
    DrawImage(ImageData: ImageData, Point?: Vector2, Scale?: number, TransparencyBlending?: boolean): void;
    SetBufferFromImage(ImageData: ImageData): void;
    DrawRotatedImage(ImageData: ImageData, Angle: number, Point?: Vector2, PivotPoint?: Vector2, Scale?: number): void;
    DrawImageRect(ImageData: ImageData, Point: Vector2, RectOffset: Vector2, RectSize: Vector2, Scale?: number, FlipX?: boolean, FlipY?: boolean): void;
    DrawTexturedTriangle(PointA: Vector2, PointB: Vector2, PointC: Vector2, UV1: number, UV2: number, UV3: number, ImageData: ImageData, Brightness?: number): void;
    DrawText(Text: string, Point: Vector2, Colour: Color3, FontName?: string, Scale?: number, Wrap?: boolean, Spacing?: number): void;

    //get
    GetPixel(Point: Vector2): Color3;
    GetPixelXY(X: number, Y: number): Color3;
    GetRGB(X: number, Y: number): RGB;
    GetRGBA(X: number, Y: number): RGBA;
    GetAlpha(X: number, Y: number): number;
    GetU32(X: number, Y: number): number;
    GetCirclePoints(Point: Vector2, Radius: number, Fill: boolean): Vector2[];
    GetLinePoints(PointA: Vector2, PointB: Vector2, Thickness: boolean, RoundedCaps: boolean): Vector2[];
    GetRectanglePoints(PointA: Vector2, PointB: Vector2, Fill: boolean): Vector2[];
    GetTrianglePoints(PointA: Vector2, PointB: Vector2, PointC: Vector2, Fill: boolean): Vector2[];
    GetBuffer(): buffer;
    GetMousePoint(): Vector2 | undefined;
    ViewportToCanvasPoint(): Vector2;
    MouseIsOnTop(): boolean;
    CreateImageDataFromCanvas(PointA: Vector2, PointB: Vector2): ImageData;

    //other methods
    SetStretchToFit(Enable?: boolean): void;
    SetClearRGBA(R: number, G: number, B: number, A: number): void;
    Resize(NewResolution: Vector2): void;
    SetBlur(Enabled: boolean): void;
    Destroy(): void;
    Render(): void;

    //events
    OnRendered(DeltaTime: number): RBXScriptSignal;
}

interface CanvasDrawConstructor {
    new(Parent: ParentType, Resolution: Vector2, CanvasColour?: Color3, Blur?: boolean): CanvasDraw;
}

declare const CanvasDraw: CanvasDrawConstructor
export = CanvasDraw