import { NextRequest, NextResponse } from "next/server";
import { TREATMENTS } from "@/data/treatment";
import { recommendTreatment } from "@/lib/ai/recomendation";
import type { Treatment } from "@/types/treatment";
import { determineScope } from "@/lib/ai/determineScope";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { areas, level, keluhan, durasi } = body;

        if (!areas?.length || !level || !keluhan || !durasi) {
            return NextResponse.json(
                { success: false, message: "Data tidak lengkap" },
                { status: 400 }
            );
        }

        const result = await recommendTreatment({
            areas,
            level,
            keluhan,
            treatments: TREATMENTS,
        });

        if (!result.success || !result.data) {
            return NextResponse.json(result, { status: 200 });
        }

        const { treatment, reason } = result.data;

        const harga = treatment.harga[Number(durasi)] ?? null;

        const scope = determineScope(areas);

        const related: (Treatment & { harga_durasi: number | null })[] = TREATMENTS
            .filter(
                (t) =>
                    (t.area === scope || areas.includes(t.area)) &&
                    t.kode !== treatment.kode
            )
            .map((t) => ({
                ...t,
                harga_durasi: t.harga[Number(durasi)] ?? null,
            }));
        return NextResponse.json({
            success: true,
            data: {
                treatment: {
                    ...treatment,
                    harga_durasi: harga,
                },
                reason,
                durasi: Number(durasi),
                related,
            },
        });
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}